import React from 'react';
import useUser from '../hooks/useUser';
import { TRole } from '../model/user';

interface IAccess {
  children: React.ReactNode ,
  role: TRole[],
}

export default function ({ children, role }: IAccess) {
  const { currentUser } = useUser();
  return (!!currentUser?.role && !!role.includes(currentUser?.role))
    ? <>{children}</>
    : <></>;
}
