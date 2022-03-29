import {
  Container,
  AccordionHeader,
  AccordionBody
} from './styles'

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

function Accordion({ id, setAccordionOpened, accordionOpened, title, description }) {

  const isOpened = title === accordionOpened;

  return (
    <Container>
      <AccordionHeader id={`accordion${id}`} isOpened={isOpened} onClick={() => setAccordionOpened(title)}>
        {title}
        {isOpened ? <AiOutlineMinus size={26} /> : <AiOutlinePlus size={26} />}
      </AccordionHeader>

      { isOpened &&
        <AccordionBody id={`textAccordion${id}`}>
          {description.map((desc) =>
            desc
          )}

        </AccordionBody>
      }
    </Container>
  )
}

export default Accordion;
