import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background: rgb(0, 0, 0, 0.5);
  z-index: 3;
`;

export const ContainerContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 40rem;
    height: 30rem;
    padding: 2.5rem;
    border-radius: 1.5rem;
    position: relative;
    animation-duration: 0.5s;
    animation-name: slidein;

    @keyframes slidein {
      from {
        top: -100%;
      }

      to {
        top: 0;
      }
    }

    background: ${theme.colors.white};
  `}
`;

export const ContainerCloseButton = styled.div`
  ${({ theme }) => css`
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
      font-size: 3rem;
      color: ${theme.colors.secondary};
    }
  `}
`;

export const ContainerInformations = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: 1.8rem;
    text-align: center;
    color: ${theme.colors.secondary};
    white-space: pre-line;
  `}
`;

export const Button = styled.a`
  ${({ theme }) => css`
    display: flex;
    width: 18rem;
    height: 5rem;
    border-radius: 0.8rem;

    align-items: center;
    justify-content: center;

    cursor: pointer;

    color: ${theme.colors.white};
    font-size: 1.6rem;

    background: ${theme.colors.secondary};
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));

    &:hover {
      opacity: 0.8;
    }
  `}
`;
