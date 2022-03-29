import {
  Container,
  Label,
  Input
} from './styles'

function InputText({ value, id, onChange, label, type }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input id={id} value={value} onChange={onChange} type={type} />
    </Container>
  )
}

export default InputText;
