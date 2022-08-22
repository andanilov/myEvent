import React, { useState, useEffect } from 'react';

import { useLoginQuery } from '../store/api';
import useUiInput from '../hooks/useUiInput';
import useUser from '../hooks/useUser';
import { usePopUp } from './PopUpContext';

import Header from './UI/Header';
import Input from './UI/Input';
import Button from './UI/Button';

interface IFormAuth {
  type: 'log' | 'reg',
}

export default function ({ type }: IFormAuth) {
  // Local state
  const [currType, setType] = useState(type);
  const [login, setLogin] = useState('');

  // Inputs states
  const email = useUiInput('');
  const name = useUiInput('');
  const pass = useUiInput('');
  const passRepeat = useUiInput('');

  // RTK Queries
  const { data, isLoading } = useLoginQuery(login);

  // -- Hooks
  const { currentUser, setCurrentUser } = useUser();
  const { unset: popUpUnset } = usePopUp();

  // -- User login
  const handleLog = (event: React.MouseEvent): void => { email.value && setLogin(email.value); }
  useEffect(() => { 
    if (!data || !data?.length) {
      return;
    }
    setCurrentUser(data[0]);
    popUpUnset();
  }, [data]);

  // -- to Reg
  const handleReg = (event: React.MouseEvent): void => console.log(email.value, pass.value);

  // -- Tpl render
  return (<div className="grid gap-4 min-w-[250px] text-[1.3em]">
    {!!currentUser && currentUser.email && <h1>{currentUser.email}</h1>}
    {currType === 'log'
      ? (<>
        <Header >Вход</Header>
        <Input {...email} isFocus placeholder="Email" defaultValue="admin1@mail.ru" />
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
