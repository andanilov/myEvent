import React, { SetStateAction, useContext, useState, MouseEvent } from 'react';

interface IPopUpProps {
  children: React.ReactNode,
}

interface IPopUp {
  set(data: SetStateAction<React.ReactNode>): void,
  unset(): void,
}

const PopUpCtxt = React.createContext({} as IPopUp);

// Hook export
export const usePopUp = () => useContext(PopUpCtxt);

// Component export
export default function ({ children }: IPopUpProps) {
  const [popUp, setPopUp] = useState<React.ReactNode>();

  const handleClickOutside = (event: MouseEvent): void => {
    event.target instanceof Element && event.target.tagName === 'SECTION' && setPopUp(undefined);
  };

  return (
    <PopUpCtxt.Provider value={{
      set: (data: SetStateAction<React.ReactNode>) => setPopUp(data),
      unset: () => setPopUp(undefined)}}
    >
      {children}
      {!!popUp && (
        <section className="flex w-screen h-screen justify-center items-center bg-[#d9d9d940] absolute top-0 backdrop-blur-sm"
          onClick={handleClickOutside}
        >
          <div className="p-4 rounded-md bg-white">
            {popUp}
          </div>          
        </section>
      )}
    </PopUpCtxt.Provider>
  );
}
