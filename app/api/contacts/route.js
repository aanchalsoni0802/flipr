import mongoose from "mongoose";
import { Contact } from "@/schema/Contact";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await mongoose.connect("mongodb://localhost:27017/flipr-db");
        const data = await Contact.find();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}

export async function POST() {
    try {
        await mongoose.connect("mongodb://localhost:27017/flipr-db");
        const ex = {
            name: "aa",
            email: "aaa@gmail.com",
            mobile: "aaaa",
            city: "aaaa"
        };
        const data = await req.json();
        const contact = new Contact(data);
        await contact.save();
        console.log(contact);
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}
