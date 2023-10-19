import React from 'react';
import { bebas } from './fonts';
import Link from 'next/link';
import Image from 'next/image';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="min-h-[96px] flex items-center justify-center px-2 md:px-6">
      <div className="flex justify-between items-center w-full max-w-screen-xl">
        <Link
          href={'/'}
          className={`${bebas.className} text-3xl flex gap-1 items-start text-gray-50`}
        >
          <Image
            src={'/logo.svg'}
            width={32}
            height={32}
            alt="Intervals logo"
          />
          <span>Intervals</span>
        </Link>

        <nav>
          <ul className="flex gap-4 uppercase">
            <li>
              <Link href={'/treinos'}>Treinos</Link>
            </li>
            <li>
              <Link href={'/about'}>Sobre</Link>
            </li>
            <li>
              <Link href={'/login'}>Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
