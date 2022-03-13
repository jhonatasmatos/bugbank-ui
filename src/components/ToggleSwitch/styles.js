import styled, { css } from 'styled-components'

export const Container = styled.label`
  border: 1px solid ${(props) => props.theme.colors.primary};
  width: 5rem;
  height: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  background: ${(props) => props.theme.colors.gray};

  ${props => props.defaultChecked && css`
    background: ${(props) => props.theme.colors.primary};`
  }
`

export const Input = styled.span`
  width: 100%;
  height: 100%;
  opacity: 0;
`

export const Span = styled.span`
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.white};
  left: 0;
  cursor: pointer;
  box-shadow: 2px 2px 4px ${(props) => props.theme.colors.primary};

  ${props => props.defaultChecked && css`
    left: 60%;`
  }
`
