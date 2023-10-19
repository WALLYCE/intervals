import { bebas } from '@/app/fonts'
import Link from 'next/link'
import React from 'react'

type Props = {
  id: string,
  label: string
}

export default function TreinoCard({id, label}: Props) {
  return (
    <div className='flex flex-col items-center gap-3 border border-teal-300 hover:bg-emerald-950 rounded p-4'>
      <h3 className={`${bebas.className} text-xl`}>{label}</h3>
      <p>Tempo total: 2:00</p>
      <Link href={`/treinos/${id}`} className={`${bebas.className} px-4 py-2 border border-teal-300 rounded text-teal-300 hover:bg-teal-600 hover:text-gray-50 bg-transparent`}>
        Iniciar
      </Link>
    </div>
  )
}