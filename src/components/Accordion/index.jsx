import {
  Container,
  AccordionHeader,
  AccordionBody
} from './styles'

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

function Accordion({setAccordionOpened, accordionOpened, title, description }) {

  const isOpened = title === accordionOpened;

  return (
    <Container>
      <AccordionHeader isOpened={isOpened} onClick={() => setAccordionOpened(title)}>
        {title}
        {isOpened ? <AiOutlineMinus size={26} /> : <AiOutlinePlus size={26} />}
      </AccordionHeader>

      { isOpened &&
        <AccordionBody>
          {description.map((desc) =>
            desc
          )}

        </AccordionBody>
      }
    </Container>
  )
}

export default Accordion;
