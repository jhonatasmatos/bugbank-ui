import styled, { css } from 'styled-components';

type ButtonProps = {
  appearance: string;
  outline: string;
  secondary: string;
  label?: string;
};

export const ContainerFormRegister = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  .login__password {
    position: relative;
    .input__default {
      padding-right: 45px;
    }

    .login__eye {
      cursor: pointer;
      position: absolute;
      right: 8px;
      top: 28px;
      border: none;
      outline: none;
      padding: 5px;
      background-color: transparent;
      opacity: 0.5;
      transition: all 0.3s;
      :hover {
        opacity: 1;
      }
    }
  }

  .login__buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 25px;
    margin-top: 15px;
    @media (max-width: 760px) {
      flex-direction: column;
      height: 12rem;
    }
  }

  .login__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
`;

export const ContainerBackButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerToggle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 760px) {
    flex-direction: column;
    height: 12rem;
  }
`;

export const ToggleText = styled.p`
  ${({ theme }) => css`
    font-size: 1.8rem;
    color: ${theme.colors.primary};

    @media (max-width: 760px) {
      font-size: 2rem;
      line-height: 1;
      max-width: 34rem;
      margin-top: 3.5rem;
    }
  `}
`;

export const Button = styled.a`
  ${({ theme }) => css`
    display: flex;
    width: 16rem;
    height: 5rem;
    border-radius: 0.8rem;

    align-items: center;
    justify-content: center;

    cursor: pointer;

    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));

    ${(p: ButtonProps) =>
      p.outline &&
      css`
        color: ${theme.colors.secondary};
        background: ${theme.colors.white};
        border: 1px solid ${theme.colors.secondary};
      `}

    ${(p: ButtonProps) =>
      p.secondary &&
      css`
        width: 100%;
        background: ${theme.colors.secondary};
      `}

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 760px) {
      width: 100%;
    }
  `}
`;

export const BackText = styled.a`
  ${({ theme }) => css`
    font-size: 1.8rem;
    color: ${theme.colors.primary};
    padding-left: 1rem;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 460px) {
      font-size: 1.6rem;
    }
  `}
`;
