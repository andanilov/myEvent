import React from 'react';

interface IHeader {
  children: React.ReactNode,
  size?: number,
}

export default function ({ size, children }: IHeader) {
  return (
    <div style={{fontSize: ['1.2', '1.6', '2', '2.5'][size ?? 0] + 'em'}}>
      {children}
    </div>
  );
}
