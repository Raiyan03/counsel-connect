import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
    let id;
    const { username, password } = await req.json();
        const prisma = new PrismaClient();
    try {
        const user = await prisma.user.findUnique({
            where: {
                username: username
            }
        });

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // Assuming that `user.password` is the hashed password stored in the database
        const passwordIsValid = bcrypt.compareSync(password, user.password);

        id = user.id;
        const token = jwt.sign({ id: id }, 'asd', {
            expiresIn: 86400 // expires in 24 hours
        });

        if (passwordIsValid) {
            return NextResponse.json({ token : token }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ message: "An error occurred", error: error.message }, { status: 500 });
    }
}
