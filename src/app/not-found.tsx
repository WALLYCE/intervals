import React from 'react'
import { bebas } from './fonts'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center p-2'>
      <h2 className={`${bebas.className} text-4xl leading-loose`}>Página não encontrada</h2>

      <p>
        A página requisitada não existe ou está em construção.
      </p>
    </div>
  )
}