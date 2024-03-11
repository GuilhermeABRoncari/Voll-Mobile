import { Divider, ScrollView } from 'native-base';
import { Botao } from '../componentes/Botao';
import CardConsulta from '../componentes/CardConsulta';
import { Titulo } from '../componentes/Titulo';
import { consultas } from '../utils/Consultas';

export default function Consultas() {
  return (
    <ScrollView padding={5}>
      <Titulo color={'blue.500'}>Minhas consultas</Titulo>
      <Botao marginTop={5}>Agendar outra consulta</Botao>
      <Titulo color={'blue.500'} fontSize={'lg'} alignSelf={'flex-start'} marginBottom={2}>
        Próximas consultas
      </Titulo>
      {consultas?.map((consulta) => {
        return (
          consulta?.foiAgendado && (
            <CardConsulta
              key={consulta.id}
              photo={consulta.photo}
              medico={consulta.medico}
              data={consulta.data}
              especialidade={consulta.especialidade}
              foiAgendado
            />
          )
        );
      })}
      <Divider my={5} />
      <Titulo color={'blue.500'} fontSize={'lg'} alignSelf={'flex-start'} marginBottom={2}>
        Consultas passadas
      </Titulo>
      {consultas?.map((consulta) => {
        return (
          consulta?.foiAtendido && (
            <CardConsulta
              key={consulta.id}
              photo={consulta.photo}
              medico={consulta.medico}
              data={consulta.data}
              especialidade={consulta.especialidade}
              foiAtendido
            />
          )
        );
      })}
    </ScrollView>
  );
}
