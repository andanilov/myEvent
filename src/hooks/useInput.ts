import { useState } from 'react';

export default function (val: string) {
  const [value, setValue] = useState<string>(val);

  return {
    value,
    onChange: (event: React.FormEvent<HTMLInputElement>): void => {
      event.target instanceof HTMLInputElement && setValue(event.target.value)
    },
  };
}
