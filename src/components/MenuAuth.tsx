import React from 'react';
import { usePopUp } from './PopUpContext';
import FormAuth from './FormAuth';

import Button from './UI/Button';
import useUser from '../hooks/useUser';
import { TRole } from '../model/user';

const userRoleTitle = {
  'admin':  'Админ',
  'manager': 'Менеджер',
  'user':   'Пользователь',
}

export default function() {
  const popUp = usePopUp();
  const { currentUser, unsetCurrentUser } = useUser();

  return (
    <div className="flex justify-center items-center">
      {!!currentUser?.email
        ? (<>
          {currentUser?.name ?? currentUser.email}
          {` (${userRoleTitle[currentUser.role]})`}
          <Button type="link" onClick={unsetCurrentUser}>Выход</Button>
        </>)
        : (<>
          <Button type="link" onClick={() => popUp.set(<FormAuth type="log" />)}>Вход</Button>
          <Button type="link" onClick={() => popUp.set(<FormAuth type="reg" />)}>Регистрация</Button> 
        </>)
      }
      </div>
  );
}
