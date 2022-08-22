import React, { useRef, useEffect } from 'react';

interface IInput {
  value: string,
  onChange: (event: React.FormEvent<HTMLInputElement>) => void,
  type?: string,
  placeholder?: string,
  isFocus?: boolean,
  defaultValue?: string,
}

export default function ({
  value,
  onChange,
  placeholder,
  type,
  isFocus,
  defaultValue,
}: IInput ) {
  const inputDom = useRef<HTMLInputElement | null>(null);

  useEffect(() => { isFocus && inputDom.current && inputDom.current.focus(); }, []);

  return (
    <input
      ref={inputDom}
      type={type ?? 'text'}
      value={value}
      onChange={onChange}
      placeholder={placeholder ?? ''}
      className="px-[.5em] py-[.3em] text-[1em] border-[1px] border-stone-500"
    />);
}
