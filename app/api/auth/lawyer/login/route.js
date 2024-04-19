import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';

export async function POST(req) {
    const { username, password } = await req.json();
        const prisma = new PrismaClient();
    try {
        const user = await prisma.lawyer.findUnique({
            where: {
                username: username
            }
        });

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // Assuming that `user.password` is the hashed password stored in the database
        const passwordIsValid = bcrypt.compareSync(password, user.password);

        if (passwordIsValid) {
            return NextResponse.json({ message: "OK" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ message: "An error occurred", error: error.message }, { status: 500 });
    }
}
