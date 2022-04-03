import styled from 'styled-components'

export const ContainerFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  .login__buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 25px;
    margin-top: 15px;
    @media(max-width: 760px){
      flex-direction: column;
      height: 12rem;
    }
  }
  .login__link {
    display: flex;
    justify-content: center;
    margin-top: 40px;

  }
`;
