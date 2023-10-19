'use client'

import { bebas } from '@/app/fonts'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error]);

  const router = useRouter();

  return (
    <div className='p-2 flex flex-col items-center'>
      <h3 className={`${bebas.className} text-xl text-red-600 leading-relaxed`}>Ocorreu um problema</h3>
      <h2 className={`${bebas.className} text-2xl leading-loose`}>Não foi possível carregar o treino</h2>

      <p className='text-center mb-4'>O treino selecionado não pôde ser carregado. Verifique sua conexão com a internet ou tente novamente mais tarde.</p>
      
      <Button onClick={() => router.push('/treinos')}>Retornar</Button>
    </div>
  )
}