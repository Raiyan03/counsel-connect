import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client';

export async function POST(req){
    const {name, username, email, password} = await req.json();
    const prisma = new PrismaClient();
    try{
        await prisma.user.create({
            data: {
                name: name,
                username: username,
                email: email,
                password: password
            }
            
        });
        return NextResponse.json({ message: "User registered successfully"}, {status: 201})

    }
    catch(e){
        console.log(e)
        return NextResponse.json({message: "An error occurred"}, {status: 500})
    }
}
