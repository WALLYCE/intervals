'use client'
import TreinoCard from "@/components/TreinoCard";
import { useEffect, useState } from "react";


export default function Page() {
  const [treinos, setTreinos] = useState<any[]>([]);


  useEffect(() => {
    fetch('/api/treino')
      .then((res) => res.json())
      .then((data) => {
        setTreinos(data)
        console.log(data)
      })
  }, [])

  return (
    <div className="flex justify-center gap-6 flex-wrap">
      {treinos && treinos.map(treino => <TreinoCard key={treino.id} id={treino.id} label={treino.label} /> ) }
    </div>
  )
}