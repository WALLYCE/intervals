import treinoService from "@/services/treino-service";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any){
    
    const res = await treinoService.get(context.params.id)

    return NextResponse.json(res);
}