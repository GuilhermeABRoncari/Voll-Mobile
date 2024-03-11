import { Box, ScrollView, VStack } from 'native-base';
import { Botao } from '../componentes/Botao';
import CardConsulta from '../componentes/CardConsulta';
import { EntradaTexto } from '../componentes/EntradaTexto';
import { Titulo } from '../componentes/Titulo';
import { consultas } from '../utils/Consultas';

export default function Explorar() {
  return (
    <ScrollView padding={5} backgroundColor={'white'}>
      <VStack padding={5} shadow={'1'} backgroundColor={'white'} marginTop={5}>
        <Box>
          <EntradaTexto label={''} placeholder={'Digite a especialidade'} />
          <EntradaTexto label={''} placeholder={'Digite sua localização'} />
        </Box>
        <Botao>Buscar</Botao>
      </VStack>
      <Titulo color={'blue.500'} alignSelf={'center'} marginTop={5}>
        Resultado da busca
      </Titulo>
      <VStack padding={5} shadow={'1'} backgroundColor={'white'} marginTop={5}>
        {consultas?.map((consulta) => (
          <CardConsulta
            key={consulta.id}
            photo={consulta.photo}
            medico={consulta.medico}
            especialidade={consulta.especialidade}
          />
        ))}
      </VStack>
    </ScrollView>
  );
}
