import styled, { css }  from 'styled-components'
import Image from 'next/image'
import InputText from '../components/InputText'

export default function Index() {

  const handleLogin = () => {
    console.log('Cliquei no login')
  }

  const handleRegister = () => {
    console.log('Cliquei no registrar')
  }

  return (
    <Background>
      <TitleBackground>
        <Image src='/bugbank.png' width='240' height='88' />

        <Title>
          O banco com bugs e falhas do seu jeito
        </Title>
        <Text>
          Faça transferências e pagamentos com bugs e pratique testes com sucesso em um cenário quase real!
        </Text>
      </TitleBackground>
      <FormBackground>
        <Wrapper>
          <InputText label='Email' type='text' />
          <InputText label='Senha' type='password' />

          <ContainerButton>
            <Button onClick={handleLogin}>Acessar</Button>
            <Button onClick={handleRegister} outline>Registrar</Button>
          </ContainerButton>

          <LinkText href='/'>Conheça nossos requisitos</LinkText>
        </Wrapper>
      </FormBackground>
    </Background>
  )
}

const Background = styled.div`
  display: grid;
  height: 100vh;

  grid-template-columns: 60% auto;
  grid-template-areas: "title form";

  @media(max-width: 960px){
    grid-template-areas:
    "title"
    "form";
  }
`

const TitleBackground = styled.div`
  padding-top: 4rem;
  padding-left: 6rem;
  border-right: 2px solid ${(props) => props.theme.colors.primary};

  grid-area: title;

  background-image: linear-gradient(
    to right bottom, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary});

    @media(max-width: 960px){
      width: 100vw;
      border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    }
`

const FormBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  grid-area: form;
  background: ${(props) => props.theme.colors.white};

  @media(max-width: 960px){
    width: 100vw;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  height: 40rem;
  margin-top: 2rem;
  align-items: center;
  justify-content: space-around;

  grid-area: form;

  @media(max-width: 460px){
    width: 20rem;
  }
`

const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: 760px){
    flex-direction: column;
    height: 12rem;
  }
`

const Button = styled.a`
  display: flex;
  width: 16rem;
  height: 5rem;
  border-radius: 0.8rem;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};

  ${props => props.outline && css`
    color: ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.secondary};`
  }

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 760px){
    width: 100%;
  }
`

const LinkText = styled.a`
  font-size: 2rem;

  &:hover {
    opacity: 0.8
  }

  @media(max-width: 460px){
    font-size: 1.6rem;
  }
`

const Title = styled.h1`
  font-size: 5.4rem;
  font-weight: bold;
  line-height: 1.2;
  max-width: 40rem;
  margin-top: 6rem;
  color: ${(props) => props.theme.colors.white};

  @media(max-width: 460px){
    font-size: 3.4rem;
    font-weight: bold;
    line-height: 1;
    max-width: 24rem;
  }
`

const Text = styled.p`
  font-size: 2.4rem;
  line-height: 1.2;
  max-width: 44rem;
  margin-top: 10rem;
  color: ${(props) => props.theme.colors.white};

  @media(max-width: 460px){
    font-size: 2rem;
    line-height: 1;
    max-width: 20rem;
    margin-top: 6.5rem;
  }
`
