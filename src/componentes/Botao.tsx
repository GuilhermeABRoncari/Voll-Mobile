import { Button } from 'native-base';
import React from 'react';

interface BotaoProps {
  children: React.ReactNode;
}

export function Botao({ children, ...rest }: BotaoProps) {
  return (
    <Button width={'100%'} backgroundColor={'blue.800'} marginTop={10} borderRadius={'lg'} {...rest}>
      {children}
    </Button>
  );
}
