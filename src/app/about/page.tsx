import React from 'react';

type Props = {};

export default function Page({}: Props) {
  return (
    <div className='flex justify-center p-2'>
      <article className="prose prose-invert">
        <h2>Sobre o Intervals</h2>

        <p>
          Bem-vindo ao nosso aplicativo de Treino Intervalado - a sua ferramenta
          essencial para alcançar resultados extraordinários em seus treinos de
          alta intensidade. Com nossa aplicação, você terá todas as
          funcionalidades necessárias para maximizar seu desempenho e alcançar
          seus objetivos de forma eficaz.
        </p>

        <h3>O que você encontra aqui?</h3>

        <ol>
          <li>
            Diversidade de Programas: Escolha entre diferentes tipos de treinos
            intervalados, como HIIT, circuito, Tabata e mais. Personalize seus
            treinos para atender às suas metas de condicionamento físico.
          </li>
          <li>
            Timers Configuráveis: Crie timers personalizados com facilidade.
            Defina os períodos de trabalho e descanso, bem como o número de
            repetições de acordo com suas preferências.
          </li>
          <li>
            Acompanhamento de Progresso (em desenvolvimento): Registre e
            acompanhe seu progresso. Visualize estatísticas simples para avaliar
            seu desempenho ao longo do tempo.
          </li>
          <li>
            Lembretes de Treino: Configure lembretes para nunca perder um treino
            e aproveitar ao máximo seu tempo de exercício.
          </li>
        </ol>

        <h3>Por que utilizar nosso aplicativo?</h3>

        <p>
          Nossa missão é simplificar e aprimorar seus treinos intervalados,
          proporcionando uma experiência fácil de usar e eficaz. Com nossa
          aplicação, você terá todas as ferramentas necessárias para elevar seu
          treino a outro nível.
        </p>

        <p>
          O treino intervalado é comprovadamente uma das melhores maneiras de
          melhorar sua aptidão e queimar calorias, e nosso aplicativo coloca
          esses benefícios ao alcance de suas mãos.
        </p>

        <p>
          Junte-se a nós hoje mesmo e comece a sua jornada de treino
          intervalado. Transforme sua saúde e forma física com nossa ajuda e
          alcance resultados surpreendentes. Baixe nosso aplicativo agora e
          experimente a diferença que ele pode fazer em seus treinos
          intervalados!
        </p>
      </article>
    </div>
  );
}
