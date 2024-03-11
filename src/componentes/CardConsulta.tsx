import { Avatar, Text, VStack } from 'native-base';
import { Botao } from './Botao';

interface CardConsultaProps {
  photo: string;
  medico: string;
  data?: string;
  especialidade: string;
  foiAtendido?: boolean;
  foiAgendado?: boolean;
}

export default function CardConsulta({
  photo,
  medico,
  data,
  especialidade,
  foiAtendido,
  foiAgendado,
}: CardConsultaProps) {
  return (
    <VStack
      padding={5}
      width={'100%'}
      backgroundColor={foiAtendido ? 'blue.100' : 'white'}
      borderRadius={'lg'}
      shadow={2}
      marginBottom={5}
    >
      <VStack flexDirection={'row'}>
        <Avatar source={{ uri: photo }} size={'lg'} />
        <VStack paddingLeft={4}>
          <Text fontSize={'md'} bold>
            {medico}
          </Text>
          <Text>{especialidade}</Text>
          <Text>{data}</Text>
        </VStack>
      </VStack>
      <Botao marginTop={4}>{foiAgendado ? 'Cancelar' : 'Agendar consulta'}</Botao>
    </VStack>
  );
}
