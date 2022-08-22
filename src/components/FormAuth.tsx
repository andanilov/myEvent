import React, { useState } from 'react';

import useUiInput from '../hooks/useUiInput';
import useUser from '../hooks/useUser';

import Header from './UI/Header';
import Input from './UI/Input';
import Button from './UI/Button';

interface IFormAuth {
  type: 'log' | 'reg',
}

export default function ({ type }: IFormAuth) {
  const [currType, setType] = useState(type);
  const email = useUiInput('');
  const name = useUiInput('');
  const pass = useUiInput('');
  const passRepeat = useUiInput('');
  const {toLog, toReg} = useUser();

  const handleLog = (event: React.MouseEvent): void => toLog(email.value, pass.value); 
  const handleReg = (event: React.MouseEvent): void => toReg(email.value, pass.value);

  return (<div className="grid gap-4 min-w-[250px] text-[1.3em]">  
    {currType === 'log'
      ? (<>
        <Header >Вход</Header>
        <Input {...email} isFocus placeholder="Email" />
        <Input {...pass} type="password" placeholder="пароль" />
        <Button onClick={handleLog}>Войти</Button>
        <Button onClick={() => setType('reg')} type="link">или Зарегистрироваться</Button>
      </>)
      : (<>
        <Header>Регистрация</Header>
        <Input {...email} isFocus placeholder="Email" />
        <Input {...name} placeholder="Имя" />
        <Input {...pass} type="password" placeholder="пароль" />
        <Input {...passRepeat} type="password" placeholder="повтор пароля" />
        <Button onClick={handleReg}>Зарегистрироваться</Button>
        <Button onClick={() => setType('log')} type="link">или Войти</Button>
      </>)
    }
  </div>);    
}
