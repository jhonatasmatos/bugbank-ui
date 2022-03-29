import {
  Container,
  ContainerContent,
  ContainerCloseButton,
  ContainerInformations,
  Text,
  Button
} from './styles'

import { BiErrorCircle, BiCheckCircle } from 'react-icons/bi'
import { FiAlertCircle } from 'react-icons/fi'

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
          {type === 'error' && (
            <BiErrorCircle size={84} color='red' />
          )}
          {type === 'ok' && (
            <BiCheckCircle size={84} color='green' />
          )}
          {type === 'alert' && (
            <FiAlertCircle size={84} color='yellow' />
          )}
          <Text id='modalText'>{text}</Text>
          <Button id='btnCloseModal' onClick={handleCloseClick}>Fechar</Button>
        </ContainerInformations>
      </ContainerContent>
    </Container>
  )
}

export default Modal;
