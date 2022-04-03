import styled from 'styled-components'

export const ContainerFieldInput = styled.div`
  position: relative;
  margin-bottom: 10px;
  padding-bottom: 18px;
  .input__label {
    font-size: 1.8rem;
    font-family: ${(props) => props.theme.font.family.default};
    color: ${(props) => props.theme.colors.primary};
  }
  .input__default {
    width: 100%;
    padding: 1.3rem 1rem;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 0.4rem;
    font-size: 1.6rem;
    margin-top: 0.6rem;
    box-shadow: 0px 0px 0px 0px ${(props) => props.theme.colors.primary};
    &:focus {
      transition: all 0.3s;
      outline: none;
      box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.primary};
    }
  }

  .input__warging {
    opacity: ${props => (props.visible ? 1 : 0)};
    bottom: -25px;
    position: absolute;
    transition: all 0.3s;
    color: red;
    font-size: 1.2rem;
    font-family: ${(props) => props.theme.font.family.default};
  }
`;
