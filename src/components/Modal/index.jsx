import {
  Container,
  ContainerContent,
  ContainerCloseButton,
  ContainerInformations,
  Text,
  Button
} from './styles'

import { BiErrorCircle, BiCheckCircle } from 'react-icons/bi'

function Modal({ type, onClose, text }) {

  const handleCloseClick = (e) => {
    e.preventDefault()
    onClose()
  }

  return (
    <Container>
      <ContainerContent>
        <ContainerCloseButton>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </ContainerCloseButton>

        <ContainerInformations>
          {type === 'error' ? (
            <BiErrorCircle size={84} color='red' />
          ):(
            <BiCheckCircle size={84} color='green' />
          )}
          <Text>{text}</Text>
          <Button onClick={handleCloseClick}>Fechar</Button>
        </ContainerInformations>
      </ContainerContent>
    </Container>
  )
}

export default Modal;
