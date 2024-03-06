import { ITextProps, Text } from 'native-base';
import React from 'react';

interface TituloProps extends ITextProps {
  children: React.ReactNode;
}

export function Titulo({ children, ...rest }: TituloProps) {
  return (
    <Text fontSize={'2xl'} fontWeight={'bold'} color={'gray.500'} textAlign={'center'} marginTop={5} {...rest}>
      {children}
    </Text>
  );
}
