import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 30% auto;
  grid-template-rows: 7.4rem auto 5.4rem;
  grid-template-areas:
    "header header"
    "profile options"
    "footer footer";

  background-image: linear-gradient(
    to right bottom, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary});

    @media(max-width: 600px){
      display: flex;
      flex-direction: column;
    }

`

export const Header = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;

  grid-area: header;

  @media(max-width: 600px){
    margin-top: 1.2rem;
  }
`

export const ContainerLink = styled.div`
  display: flex;
  width: 10rem;
  height: 3.4rem;
  border-radius: .6rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background: ${(props) => props.theme.colors.white};

  @media(max-width: 600px){
    width: 4rem;
    height: 3rem;
  }
`

export const ContainerInformations = styled.div`
  width: 100%;
  height: 100%;

  grid-area: profile;
`

export const ContainerInfos = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-right: 1px solid ${(props) => props.theme.colors.white};

  @media(max-width: 600px){
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
    border-right: none;
  }
`

export const InitialLetterName = styled.div`
  display: flex;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;

  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors.black};

  @media(max-width: 760px){
    width: 10rem;
    height: 10rem;
  }
`

export const LetterName = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 5.4rem;
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin-top: 2.4rem;

  align-items: center;
  justify-content: center;
`

export const ContainerAccountNumber = styled.div`
  display: flex;
  width: 30rem;
  margin-top: 5rem;

  align-items: center;
  justify-content: center;

  @media(max-width: 600px){
    margin-top: 1.4rem;
  }
`

export const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  text-align: center;
  line-height: 1.4;
  margin: 0;

  span {
    font-weight: bold;
  }

  @media(max-width: 760px){
    font-size: 1.4rem;
  }
`

export const ContainerOptions = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-area: options;

  grid-template-rows: 2fr 3fr 1fr;
  grid-template-areas:
    "balance"
    "buttons"
    "footer";

  @media(max-width: 600px){
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`

export const ContainerBalance = styled.div`
  display:flex;
  width: 100%;
  height: 5.4rem;
  align-items: center;
  justify-content: center;

  grid-area: balance;
`

export const ContainerButtons = styled.div`
  display: flex;
  height: 100%;
  padding: 0 12rem;
  align-items: center;
  justify-content: space-between;

  grid-area: buttons;

  @media(max-width: 1100px){
    padding: 0 7rem;
  }

  @media(max-width: 870px){
    padding: 0 2rem;
  }

  @media(max-width: 760px){
    padding: 0 1rem;
  }

  @media(max-width: 600px){
    align-items: center;
    justify-content: space-between;

    overflow: auto;
  }

`

export const Button = styled.a`
  display: flex;
  width: 14rem;
  height: 14rem;
  border-radius: 1.2rem;

  align-items: center;
  justify-content: center;

  border: 1px solid ${(props) => props.theme.colors.white};
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));

  background-image:
    linear-gradient(40deg, ${(props) => props.theme.colors.secondary} 26%, rgba(164, 34, 227, 0) 80%);

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s;
  }

  @media(max-width: 1100px){
    width: 10rem;
    height: 10rem;
  }

  @media(max-width: 600px){
    width: 8rem;
    height: 8rem;
  }
`

export const Footer = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
  padding: 0 4rem;
  align-items: center;
  justify-content: flex-end;

  grid-area: footer;

  @media(max-width: 600px){
    justify-content: center;
  }
`
