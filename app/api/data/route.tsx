import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient;
export const GET = async (req: Request, res: Response) => {
    const { searchParams } = new URL(req.url)
    const items = searchParams.get('items')
    const page = searchParams.get('page')

    const DATA_PAR_PAGE = items ?? 10

    await prisma.$connect();

    try {
        const responsreData = await prisma.match.findMany({
            take: DATA_PAR_PAGE as any,
            skip: DATA_PAR_PAGE as any * (page as any - 1) as any
        });

        return NextResponse.json({ data: responsreData }, { status: 200 })
    } catch (error) {
        return NextResponse.json(error)
    }



} 