import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET() {
    const catalog = await prisma.catalog.findMany({
        where: {
            parentId: null,
        },
        include: {
            children: {
                include: {
                    children: true,
                },
            },
        },
    });

    return NextResponse.json({ catalog });
}
