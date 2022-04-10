import styled from 'styled-components';

export const ContainerFormLogin = styled.form`
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
