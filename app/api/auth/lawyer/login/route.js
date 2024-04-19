import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
    const { username, password } = await req.json();
        const prisma = new PrismaClient();
    let id;
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
        console.log(user);
        id = user.id;
        console.log(id);
        const token = jwt.sign({ id: id }, 'asd', {
            expiresIn: 86400 
        });

        if (passwordIsValid) {
            return NextResponse.json({ token: token }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "An error occurred", error: error.message }, { status: 500 });
    }
}
