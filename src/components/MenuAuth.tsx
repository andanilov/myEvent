import React from 'react';
import { usePopUp } from './PopUpContext';
import FormLogin from './FormLogin';

export default function() {
  const popUp = usePopUp();

  return (
    <button onClick={() => popUp.set(<FormLogin />)}>Вход</button>
  );
}
