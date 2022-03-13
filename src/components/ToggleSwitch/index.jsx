import {
  Container,
  Input,
  Span
} from './styles'

function ToggleSwitch({ isChecked, onClick }) {
  return (
    <Container defaultChecked={isChecked}>
      <Input defaultChecked={isChecked} type='checkbox' onClick={onClick} />
      <Span defaultChecked={isChecked} />
    </Container>
  )
}

export default ToggleSwitch;
