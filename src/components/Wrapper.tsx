import React from 'react';
import Logo from './Logo';
import MenuAuth from './MenuAuth';
import MenuHeader from './MenuHeader';

interface IWrapper {
  children: React.ReactNode,
}

const Wrapper = ({ children }: IWrapper) => (
  <div className="max-w-7xl mx-auto min-h-screen">
    <header className="flex flex-row h-[100px] border-b-2 border-stone-200">
      <div className="basis-1/5 flex items-center justify-center"><Logo /></div>
      <div className="basis-3/5 flex items-center justify-center"><MenuHeader /></div>
      <div className="basis-1/5 flex items-center justify-center"><MenuAuth /></div>
    </header>
    <section>{children}</section>
  </div>
);

export default Wrapper;