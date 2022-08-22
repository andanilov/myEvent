import React from 'react';
import Wrapper from '../components/Wrapper';
import { useGetUsersQuery } from '../store/api';

export default function () {
  const {data = [], isLoading} = useGetUsersQuery('');

  isLoading && console.log('Загрузка');
  !!data && data.length && console.log(data);  

  return (
    <Wrapper>
      <h1 className="text-center text-4xl p-8">Пользователи</h1>
    </Wrapper>
  );
}
