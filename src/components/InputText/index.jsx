import {
  Container,
  Label,
  Input
} from './styles'

function InputText({ value, onChange, label, type }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input value={value} onChange={onChange} type={type} />
    </Container>
  )
}

export default InputText;
