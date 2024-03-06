import { Box, Button, FormControl, Image, Input, Link, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png';

export default function Login() {
  return (
    <VStack flex={1} alignItems={'center'} justifyContent={'center'} padding={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Text fontSize={'2xl'} fontWeight={'bold'} color={'gray.500'} textAlign={'center'} marginTop={5}>
        Faça login em sua conta
      </Text>
      <Box>
        <FormControl marginTop={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            placeholder="Insira seu endereço de email"
            size={'lg'}
            width={'100%'}
            borderRadius={'lg'}
            backgroundColor={'gray.100'}
            shadow={3}
          />
        </FormControl>
        <FormControl marginTop={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input
            placeholder="Insira sua senha"
            size={'lg'}
            width={'100%'}
            borderRadius={'lg'}
            backgroundColor={'gray.100'}
            shadow={3}
          />
        </FormControl>
      </Box>
      <Button width={'100%'} backgroundColor={'blue.800'} marginTop={10} borderRadius={'lg'}>
        Entrar
      </Button>
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
