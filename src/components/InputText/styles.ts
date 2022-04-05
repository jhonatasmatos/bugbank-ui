import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    padding: 1rem;
    border: 1px solid ${theme.colors.primary};
    border-radius: 0.4rem;
    margin-top: 0.4rem;

    font-size: 1.6rem;

    &:focus {
      outline: none;
      border: 2px solid ${theme.colors.primary};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-family: ${theme.font.family.default};
    color: ${theme.colors.primary};
  `}
`
