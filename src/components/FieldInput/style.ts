import styled, { css } from 'styled-components';

type ContainerFieldInputProps = {
  visible: boolean;
};

export const ContainerFieldInput = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: 8px;
    padding-bottom: 16px;

    .input__label {
      font-size: 1.8rem;
      font-family: ${theme.font.family.default};
      color: ${theme.colors.primary};
    }

    .input__default {
      width: 100%;
      padding: 1.3rem 1rem;
      border: 1px solid ${theme.colors.primary};
      border-radius: 0.4rem;
      font-size: 1.6rem;
      margin-top: 0.6rem;
      box-shadow: 0px 0px 0px 0px ${theme.colors.primary};

      &:focus {
        transition: all 0.3s;
        outline: none;
        box-shadow: 0px 0px 0px 1px ${theme.colors.primary};
      }
    }

    .input__warging {
      opacity: ${(p: ContainerFieldInputProps) => (p.visible ? 1 : 0)};
      bottom: -25px;
      position: absolute;
      transition: all 0.3s;
      color: red;
      font-size: 1.2rem;
      font-family: ${theme.font.family.default};
    }
  `}
`;
