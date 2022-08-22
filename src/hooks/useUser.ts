import { useState } from 'react';

export default function () {
  return {
    toLog: (email: string, password: string): void => console.log('LOG', email, password),
    toReg: (email: string, password: string): void => console.log('LOG', email, password),    
  }
}
