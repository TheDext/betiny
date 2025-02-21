import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma-client';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { serialize } from 'cookie';

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();
    const SECRET_KEY_A = 'asfdasdgasjdghjfhgk';
    const SECRET_KEY_R = 'ASSDGKDJFGsdgfdsfghyt4';
    const isUserExist = await prisma.user.findFirst({
        where: {
            name: email,
        },
    });

    if (isUserExist) {
        return NextResponse.json(
            {
                error: 'Пользователь с таким email уже существует',
            },
            {
                status: 409,
            }
        );
    }

    const accessToken = jsonwebtoken.sign({ email, password }, SECRET_KEY_A, {
        expiresIn: '15min',
    });
    const refreshToken = jsonwebtoken.sign({ email, password }, SECRET_KEY_R, {
        expiresIn: '2h',
    });
    const hashPass = await bcrypt.hash(password, 10);

    const createdUser = await prisma.user.create({
        data: { name: email, password: hashPass, refreshToken },
    });

    const accessCookie = serialize('accessCookie', accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
    });

    const response = NextResponse.json(
        { createdUser, message: 'Пользователь успешно создан!' },
        { status: 200 }
    );
    response.headers.set('Set-Cookie', accessCookie);

    return response;
}
