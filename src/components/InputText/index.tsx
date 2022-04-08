import {
  Container,
  Label,
  Input
} from './styles'

export type InputTextProps = {
  value: string;
  id: string;
  onChange: (arg: string) => void;
  label: string;
  type: string;
}

export const InputText = ({
  value,
  id,
  onChange,
  label,
  type }: InputTextProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input id={id} value={value} onChange={onChange} type={type} />
    </Container>
  )
}
