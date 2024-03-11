import { Box, Divider, Image, ScrollView, Text, VStack } from 'native-base';
import Logo from '../assets/Logo.png';
import { Botao } from '../componentes/Botao';
import { EntradaTexto } from '../componentes/EntradaTexto';
import { Titulo } from '../componentes/Titulo';
import { depoiementos } from '../utils/Depoimentos';

export default function Principal() {
  return (
    <ScrollView flex={1} backgroundColor={'white'}>
      <VStack flex={1} alignItems={'flex-start'} justifyContent={'flex-start'} padding={5}>
        <Image source={Logo} alt="Logo Voll" />
        <Titulo color={'blue.400'} alignSelf={'start'}>
          Boas-vindas!
        </Titulo>
        <Box width={'100%'} borderRadius={'lg'} padding={3} marginTop={10} shadow={'1'} borderRightRadius={'md'}>
          <EntradaTexto label={''} placeholder={'Digite a especialidade'}></EntradaTexto>
          <EntradaTexto label={''} placeholder={'Digite sua localização'}></EntradaTexto>
          <Botao>Buscar</Botao>
        </Box>
        <Titulo color={'blue.800'} alignSelf={'center'}>
          Depoimentos
        </Titulo>
      </VStack>
      <VStack space={3} divider={<Divider />} width={'100%'}>
        {depoiementos?.map((depoimento) => {
          return (
            <Box key={depoimento.id} width={'100%'} borderRadius={'lg'} padding={3}>
              <Text color={'gray.300'} fontSize={'md'} textAlign={'justify'}>
                {depoimento.depoimento}
              </Text>
              <Text color={'gray.500'} fontSize={'lg'} fontWeight={'bold'} alignSelf={'center'} marginTop={2}>
                {depoimento.perfil}
              </Text>
            </Box>
          );
        })}
      </VStack>
    </ScrollView>
  );
}
