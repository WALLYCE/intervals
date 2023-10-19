import React from 'react'
import { bebas } from '@/app/fonts';
import TreinoPanel from '@/components/TreinoPanel';
import { Treino } from '@/models/treino';

type Props = {
  params: { id: string }
}


const fetchTreino = async(id: String): Promise<Treino>=>{
  const data = await fetch(`http://localhost:3000/api/treino/${id}`)
 return data.json()
}

export default async function Page({params}: Props) {
  const treino = await fetchTreino(params.id);


  return (
    <div className='flex flex-col gap-4 items-center'>
      <h2 className={`${bebas.className} text-3xl`}>{treino.label}</h2>

      <div>
        <TreinoPanel treino={treino} />
      </div>
    </div>
  )
}