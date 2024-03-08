import { Box, Image, Link, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';

import Logo from './assets/Logo.png';
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';

export default function Login() {
  return (
    <VStack flex={1} alignItems={'center'} justifyContent={'center'} padding={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo>Faça login na sua conta</Titulo>
      <Box>
        <EntradaTexto label={'Email'} placeholder={'Insira seu endereço de email'} />
        <EntradaTexto label={'Senha'} placeholder={'Insira sua senha'} secreto={true} />
      </Box>
      <Botao>Entrar</Botao>
      <Link href="" marginTop={5}>
        Esqueceu sua senha?
      </Link>
      <Box width={'100%'} flexDirection={'row'} justifyContent={'center'} marginTop={10}>
        <Text>Ainda não tem conta? </Text>
        <TouchableOpacity>
          <Text color={'blue.500'}>Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
