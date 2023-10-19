'use client';
import { Treino } from '@/models/treino';
import { useCallback, useEffect, useState } from 'react';
import Button from './ui/Button';
import styles from './TreinoPanel.module.css';
import { bebas } from '@/app/fonts';

type Props = {
  treino: Treino;
};

interface TimerState {
  isPlaying: boolean;
  timer: number;
  currentInterval: number;
}

export default function TreinoPanel({ treino }: Props) {
  const [currentTimerState, setCurrentTimerState] = useState<TimerState>({
    isPlaying: false,
    timer: 0,
    currentInterval: 0,
  });

  const clearTimerState = useCallback(() => setCurrentTimerState({
    isPlaying: false,
    timer: treino.intervals[0].seconds,
    currentInterval: 0,
  }), [treino]);

  useEffect(() => clearTimerState(), [clearTimerState]);

  useEffect(() => {
    if (currentTimerState.isPlaying) {
      const id = setInterval(
        () =>
          setCurrentTimerState((curr) => {
            const newState = { ...curr };
            if (curr.timer === 1) {
              if (curr.currentInterval < treino.intervals.length - 1) {
                newState.currentInterval++;
                newState.timer =
                  treino.intervals[newState.currentInterval].seconds;
              } else {
                newState.isPlaying = false;
                newState.currentInterval = 0;
                newState.timer = treino.intervals[0].seconds;
              }
            } else {
              newState.timer--;
            }
            return newState;
          }),
        1000
      );

      return () => clearInterval(id);
    }
  }, [currentTimerState.isPlaying, treino]);

  const playClickHandler = () => {
    setCurrentTimerState((curr) => {
      return {
        ...curr,
        isPlaying: true
      };
    });
  };

  const stopClickHandler = () => clearTimerState();

  const currInterval = treino.intervals[currentTimerState.currentInterval];

  let bgColorClass = 'bg-gray-400';
  if (currentTimerState.isPlaying) {
    if (currInterval.intensity == 0) {
      bgColorClass = 'bg-teal-300';
    } else if (currInterval.intensity == 1) {
      bgColorClass = 'bg-orange-300';
    } else if (currInterval.intensity >= 2) {
      bgColorClass = 'bg-orange-600';
    }
  }

  const totalTime = treino.intervals.map(i => i.seconds).reduce((v1, v2) => v1 + v2, 0);
  const remainingTime = treino.intervals.filter((interval, index) => index > currentTimerState.currentInterval)
    .map(i => i.seconds).reduce((v1, v2) => v1 + v2, 0) + currentTimerState.timer;
  const progress = Math.round(remainingTime * 100 / totalTime);
  

  return (
    <div className={`${styles['panel']} border rounded py-2 border-gray-50 ${bebas.className}`}>
      <div className={`${styles['timer']} flex items-center justify-center p-4 text-8xl`}>
        {currentTimerState.isPlaying ? currentTimerState.timer : '--'}
      </div>

      <div className={`${styles['bar']} ${bgColorClass} flex items-center justify-center h-full text-3xl`}>
        {currentTimerState.isPlaying ? currInterval.label : 'Clique para iniciar o treino'}
      </div>

      <div className={`${styles['progress']} bg-gray-700 h-full`}>
        <div className='bg-teal-600 h-full' style={{width: `${progress}%`}}></div>
      </div>

      <div className={`${styles['start']} flex justify-center col-span-2`}>
        <Button onClick={playClickHandler}>Iniciar</Button>
      </div>

      <div className={`${styles['stop']} flex justify-center col-span-2`}>
        <Button onClick={stopClickHandler} cancel={true}>Parar</Button>
      </div>
    </div>
  );
}
