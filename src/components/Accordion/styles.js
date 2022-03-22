import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0 10rem;

  margin-bottom: 1.4rem;
`

export const AccordionHeader = styled.div`
  display: flex;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.2rem;
  cursor: pointer;
  position: relative;

  color: ${(props) => props.theme.colors.white};

  border: 1px solid ${(props) => props.theme.colors.white};

  ${props => props.isOpened && css`
  border-bottom: none;`
}
`

export const AccordionBody = styled.div`
  padding: 1.2rem;
  line-height: 1.4;
  color: ${(props) => props.theme.colors.white};

  border-left: 1px solid ${(props) => props.theme.colors.white};
  border-right: 1px solid ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
`
