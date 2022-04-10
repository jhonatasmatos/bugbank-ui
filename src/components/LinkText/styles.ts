import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.secondary};
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 460px) {
      font-size: 1.6rem;
    }
  `}
`;
