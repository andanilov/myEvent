// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store'
// import { useLoginQuery } from '../store/api';
import { setUser } from '../store/userSlice';

export default function () {
  // Global State
  const dispatch  = useDispatch();
  const currentUser = useSelector((state: IRootState) => state.user.user); 


  return {
    currentUser,
    setCurrentUser: (user: object): void => { dispatch(setUser(user)); },
    unsetCurrentUser: (): void => { dispatch(setUser({})); },
  }
}
