import React from 'react';
import useInput from '../hooks/useInput';
import Input from './UI/Input';

export default function () {
  const email = useInput('');
  const pass = useInput('');

  return (
    <>
      <Input {...email} isFocus />
    </>
  );
}
