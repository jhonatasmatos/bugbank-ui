import { Container, AccordionHeader, AccordionBody } from './styles';

import { FiMinus, FiPlus } from 'react-icons/fi';

export type AccordionProps = {
  id: string;
  setAccordionOpened: (arg: string) => void;
  accordionOpened: string;
  title: string;
  description: string[];
};

export const Accordion = ({
  id,
  setAccordionOpened,
  accordionOpened,
  title,
  description,
}: AccordionProps) => {
  const isOpened = title === accordionOpened;

  return (
    <Container>
      <AccordionHeader
        id={`accordion${id}`}
        isOpened={isOpened}
        onClick={() => setAccordionOpened(title)}
      >
        {title}
        {isOpened ? <FiMinus size={26} /> : <FiPlus size={26} />}
      </AccordionHeader>

      {isOpened && (
        <AccordionBody id={`textAccordion${id}`}>
          {description.map((desc) => desc)}
        </AccordionBody>
      )}
    </Container>
  );
};
