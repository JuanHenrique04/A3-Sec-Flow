import prisma from "../../../../prisma/db";
import { NextResponse, Prisma } from "next/server";

export async function POST(req) {
  const body = await req.json()
  const test = await prisma.registros.create({
    data: {
      tipo: body.tipo,
      nomeRegistro: body.nomeRegistro,
      cvssECwss: body.cvssECwss,
      sistema: body.sistema,
      descricao: body.descricao,
    },
  })
  return NextResponse.json(test)
}

export async function GET() {
  try {
    const registros = await prisma.registros.findMany()
    return NextResponse.json(registros)
  } catch (error) {
    console.error('Erro ao buscar registros:', error)
    return NextResponse.json({ error: 'Erro ao buscar registros' }, { status: 500 })
  }
}
