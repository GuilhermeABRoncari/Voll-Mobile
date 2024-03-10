import { Box, Checkbox, Image, ScrollView, Text } from 'native-base';
import { useState } from 'react';
import Logo from './assets/Logo.png';
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';
import { secoes } from './utils/CadastroEntradaTexto';

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState<number>(0);

  function avancarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  }

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  }

  return (
    <ScrollView flex={1} padding={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf={'center'} />
      <Titulo>{secoes[numSecao].titulo}</Titulo>
      {numSecao === 2 && (
        <Text color={'blue.800'} fontWeight={'bold'} fontSize={'md'} marginTop={2} marginBottom={4}>
          Selecione o plano:
        </Text>
      )}
      <Box>
        {secoes[numSecao]?.entradaTexto?.map((entrada) => (
          <EntradaTexto key={entrada?.id} label={entrada?.label} placeholder={entrada?.placeholder} />
        ))}
      </Box>
      <Box>
        {secoes[numSecao]?.checkbox?.map((checkbox) => (
          <Checkbox key={checkbox?.id} value={checkbox?.value}>
            {checkbox.value}{' '}
          </Checkbox>
        ))}
      </Box>
      {numSecao > 0 && (
        <Botao backgroundColor={'gray.400'} onPress={() => voltarSecao()}>
          Voltar
        </Botao>
      )}
      {numSecao === 2 ? <Botao>Cadastrar!</Botao> : <Botao onPress={() => avancarSecao()}>Avançar</Botao>}
    </ScrollView>
  );
}
