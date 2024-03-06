import { FormControl, Input } from 'native-base';

interface TextoEntradaProps {
  label: string;
  placeholder: string;
}

export function EntradaTexto({ label, placeholder }: TextoEntradaProps) {
  return (
    <FormControl marginTop={3}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        placeholder={placeholder}
        size={'lg'}
        width={'100%'}
        borderRadius={'lg'}
        backgroundColor={'gray.100'}
        shadow={3}
      />
    </FormControl>
  );
}
