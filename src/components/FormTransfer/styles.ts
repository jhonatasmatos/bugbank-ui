import styled, { css } from 'styled-components'

type ButtonProps = {
  appearance: string;
  outline: string;
  secondary: string;
  label?: string;
}

export const ContainerFormTransfer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 5rem;
  width: 50rem;
  border-radius: 2rem;

  background: ${(props) => props.theme.colors.white};

    .account__data {
      display: grid;
      grid-template-columns: auto 20%;
      gap: 0.8rem;
    }
`;

export const ContainerBackButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Button = styled.a<ButtonProps>`
  ${({ theme }) => css`
    display: flex;
    width: 16rem;
    height: 5rem;
    border-radius: 0.8rem;
    margin-top: 1rem;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));

    ${(p: ButtonProps) => p.outline && css`
      color: ${theme.colors.secondary};
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.secondary};`
    }

    ${(p: ButtonProps) => p.secondary && css`
      width: 100%;
      background: ${theme.colors.secondary};`
    }

    &:hover {
      opacity: 0.8;
    }

    @media(max-width: 780px){
      width: 100%;
    }
  `}
`

export const BackText = styled.a`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.primary};
  padding-left: 1rem;

  &:hover {
    opacity: 0.8
  }

  @media(max-width: 460px){
    font-size: 1.6rem;
  }
`
