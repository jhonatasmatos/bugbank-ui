import styled, { css } from 'styled-components';

type Props = {
  isChecked: boolean;
};

export const Container = styled.label`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.primary};
    width: 5rem;
    height: 2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    background: ${theme.colors.gray};

    ${(p: Props) =>
      p.isChecked &&
      css`
        background: ${theme.colors.primary};
      `}
  `}
`;

export const Input = styled.label`
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export const Span = styled.span`
  ${({ theme }) => css`
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    background: ${theme.colors.white};
    left: 0;
    cursor: pointer;
    box-shadow: 2px 2px 4px ${theme.colors.primary};
    transition: all 0.3s;

    ${(p: Props) =>
      p.isChecked &&
      css`
        left: 60%;
      `}
  `}
`;
