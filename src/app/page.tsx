import Image from 'next/image';
import { bebas } from './fonts';
import { ImClock, ImHeart, ImTarget } from 'react-icons/im';

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="flex flex-col md:flex-row-reverse md:justify-around md:mx-6 md:mt-4 lg:mt-8 justify-center items-center p-2"
      >
        <Image
          src={'/hero.png'}
          alt={'Atleta'}
          width={868}
          height={389}
          className="h-auto w-[320px] md:w-[50%] lg:w-[60%]"
        />
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2
            className={`${bebas.className} text-6xl md:text-7xl lg:text-8xl leading-none tracking-wide`}
          >
            Potencialize <br />o seu <span className="font-light">treino</span>{' '}
            <br />
            <span className="text-teal-300">intervalado</span>
          </h2>

          <p className="font-extralight text-sm max-w-[360px] text-center md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            repellat temporibus dolores pariatur eum error similique.
          </p>

          <button
            className={`mt-2 border border-teal-300 py-2 px-8 rounded-md bg-transparent hover:bg-teal-300 ${bebas.className} text-teal-300 hover:text-zinc-950 transition-colors duration-300 text-center text-2xl`}
          >
            Iniciar agora!
          </button>
        </div>
      </section>

      <section id="features" className='flex justify-center gap-12 flex-wrap py-16'>
        <div className='flex flex-col items-center gap-2 py-4 px-2 rounded w-48 bg-gray-800'>
          <span className='text-lg'><ImClock /></span>
          <h3 className={`${bebas.className} text-xl`}>Otimize o seu tempo</h3>
          <p className='font-thin text-xs text-center'>
            Eveniet animi, cum incidunt dolorum neque molestias enim vel beatae tempore cupiditate libero doloremque.
          </p>
        </div>

        <div className='flex flex-col items-center gap-2 py-4 px-2 rounded w-48 bg-gray-800'>
          <span className='text-lg'><ImHeart /></span>
          <h3 className={`${bebas.className} text-xl`}>Melhore a sua saúde</h3>
          <p className='font-thin text-xs text-center'>
            Eveniet animi, cum incidunt dolorum neque molestias enim vel beatae tempore cupiditate libero doloremque.
          </p>
        </div>

        <div className='flex flex-col items-center gap-2 py-4 px-2 rounded w-48 bg-gray-800'>
          <span className='text-lg'><ImTarget /></span>
          <h3 className={`${bebas.className} text-xl`}>Atinja suas metas</h3>
          <p className='font-thin text-xs text-center'>
            Eveniet animi, cum incidunt dolorum neque molestias enim vel beatae tempore cupiditate libero doloremque.
          </p>
        </div>
      </section>
    </>
  );
}
