import styled, { css } from 'styled-components';

interface IWarnigWrapper {
  color?: 'white' | 'primary';
}

export const WarnigWrapper = styled.p`
  ${({ theme }) => css`
    padding: 1.6rem;
    border: 1px solid ${theme.colors.secondary};
    border-radius: 0.8rem;
    color: ${theme.colors.secondary};
    font-style: italic;
    font-size: 1.3rem;
    text-align: center;
    line-height: 1.6rem;

    span {
      font-weight: bold;
    }

    ${(p: IWarnigWrapper) =>
      p.color == 'white' &&
      css`
        border: 1px solid ${theme.colors.white};
        color: ${theme.colors.white};
      `}
  `}
`;
