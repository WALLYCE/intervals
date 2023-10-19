import treinoService from "@/services/treino-service";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    
    const res = await treinoService.getAll()

    return NextResponse.json(res);
}