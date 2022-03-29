import {
  Container,
  Input,
  Span
} from './styles'

function ToggleSwitch({ id, isChecked, onClick }) {
  return (
    <Container defaultChecked={isChecked}>
      <Input id={id} defaultChecked={isChecked} type='checkbox' onClick={onClick} />
      <Span defaultChecked={isChecked} />
    </Container>
  )
}

export default ToggleSwitch;
