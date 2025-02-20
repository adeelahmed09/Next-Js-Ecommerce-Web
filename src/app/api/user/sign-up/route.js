import User from "@/models/User.model";
import Admin from "@/models/Admin.model";
import { NextRequest, NextResponse } from "next/server";

const res = NextResponse

export async function POST(req){
    const data = await req.json()

}