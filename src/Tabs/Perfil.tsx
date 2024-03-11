import { Avatar, Divider, ScrollView, Text, VStack } from 'native-base';
import { Titulo } from '../componentes/Titulo';

export default function Perfil() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems={'center'} padding={5}>
        <Titulo color={'blue.500'}>Meu Perfil</Titulo>
        <Avatar source={{ uri: 'https://github.com/GuilhermeABRoncari.png' }} marginTop={5} size={'xl'} />
        <Titulo color={'blue.500'}>Informações pessoais</Titulo>
        <Titulo fontSize={'lg'} marginBottom={1}>
          Guilherme Roncari
        </Titulo>
        <Text>27/04/1995</Text>
        <Text>Minas Gerais - MG</Text>

        <Divider my={5} />

        <Titulo color={'blue.500'} marginBottom={1}>
          Histórico médico
        </Titulo>
        <Text>Bronquite</Text>
        <Text>Asma</Text>
      </VStack>
    </ScrollView>
  );
}
