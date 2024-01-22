import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import JSONBigInt from "json-bigint";

const jsonBigInt = JSONBigInt({ strict: true });
const prisma = new PrismaClient();

export const POST = async (req: Request, res: Response) => {
    const APIKEY = process.env.APIKEY;
    const body = await req.json();
    const { searchParams } = new URL(req.url);
    
    // Ensure items and page are numbers, defaulting to 1 if they are null
    const items = searchParams.get('items') ? Number(searchParams.get('items')) : 1;
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

    if (!APIKEY || APIKEY !== body.APIKEY) {
        return NextResponse.json({ error: "Invalid API key" });
    }

    try {
        prisma.$connect();

        const response = await prisma.match.findMany({
            take: items,
            skip: items * (page - 1)
        });

        const serializedResponse = jsonBigInt.stringify(response);

        return NextResponse.json({ data: JSON.parse(serializedResponse) });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    } finally {
        prisma.$disconnect();
    }
};
