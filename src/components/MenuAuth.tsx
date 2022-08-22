import React from 'react';
import { usePopUp } from './PopUpContext';
import FormAuth from './FormAuth';

export default function() {
  const popUp = usePopUp();

  return (
    <div>
      <button onClick={() => popUp.set(<FormAuth type="log" />)}>Вход</button>
      <button onClick={() => popUp.set(<FormAuth type="reg" />)}>Регистрация</button>
    </div>
  );
}
