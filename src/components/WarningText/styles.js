import styled, { css } from 'styled-components'

export const WarnigWrapper = styled.p`
  padding: 1.6rem;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 0.8rem;
  color: ${(props) => props.theme.colors.secondary};
  font-style: italic;
  font-size: 1.3rem;
  text-align: center;
  line-height: 1.6rem;

  span {
    font-weight: bold;
  }

  ${props => props.color == 'white' && css`
    border: 1px solid ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.white};`
  }
`
