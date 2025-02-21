//@ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import jsonwebtoken from 'jsonwebtoken';
import { prisma } from '../../../../../prisma/prisma-client';
import { serialize } from 'cookie';

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();
    const SECRET_KEY_A = 'asfdasdgasjdghjfhgk';
    const SECRET_KEY_R = 'ASSDGKDJFGsdgfdsfghyt4';

    const access = jsonwebtoken.sign({ email, password }, SECRET_KEY_A, {
        expiresIn: '15min',
    });
    const refresh = jsonwebtoken.sign({ email, password }, SECRET_KEY_R, {
        expiresIn: '1h',
    });

    let user;

    const existedUser = await prisma.user.findFirst({
        where: {
            name: email,
        },
    });

    if (!existedUser) {
        const createdUser = await prisma.user.create({
            data: {
                name: email,
                password,
                refreshToken: refresh,
            },
        });
        user = createdUser;
    }

    const cookieAccess = serialize('cookieAccess', access, {
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
    });

    const response = NextResponse.json(
        {
            user: existedUser || user,
            message: 'Пользователь успешь создан!',
        },
        { status: 200 }
    );

    response.headers.set('Set-Cookie', cookieAccess);

    console.log('RESPONSE', response);

    return response;
}
