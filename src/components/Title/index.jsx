import {
  Container,
  Label,
  Input
} from './styles'

function InputText({ label, type }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input type={type} />
    </Container>
  )
}

export default InputText;
