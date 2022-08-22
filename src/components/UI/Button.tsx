import React from 'react';
import clsx from 'clsx';

interface IButton {
  children: React.ReactNode,
  onClick: (event: React.MouseEvent) => void,
  type?: 'success' | 'error' | 'info' | 'link',
}

export default function ({ type, onClick, children }: IButton) {
  type = type ?? 'success';

  return (
    <button
      className={clsx(['text-white px-[.6em] py-[.5em] text-[1em] rounded-[.2em] tracking-wide'], {
        ['bg-red-500']: type === 'error',
        ['bg-gradient-to-b from-lime-600 to-lime-500 hover:from-lime-500 hover:to-lime-600 ']: type === 'success',
        ['bg-transparent text-sky-800 tracking-normal hover:text-sky-600']: type === 'link',        
        ['bg-stone-500']: type === 'info',        
      })}
      onClick={(event: React.MouseEvent) => onClick(event)}
    >
      {children}
    </button>
  );
}
