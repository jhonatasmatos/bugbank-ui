import { useState } from 'react'
import { useRouter } from 'next/router'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import styled, { css } from 'styled-components'
import Image from 'next/image'
import InputText from '../components/InputText'
import ToggleSwitch from '../components/ToggleSwitch'
import LinkText from '../components/LinkText'

function Index() {
  const [isLogin, setLogin] = useState(true)
  const [isChecked, setChecked] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const router = useRouter()

  const handleBackButton = () => {
    setLogin((prevState) => !prevState)
  }

  const handleLogin = () => {
    console.log('Login')
    router.push('/home')
  }

  const handleRegister = () => {
    // console.log(name)
    // console.log(email)
    // console.log(password)
    // console.log(passwordConfirmation)
    // console.log(isChecked)
    setLogin((prevState) => !prevState)
  }

  const handleChecked = () => {
    setChecked((prevState) => !prevState)
  }

  return (
    <Background>
      <TitleBackground>
        <Image src='/imgs/bugbank.png' width='240' height='88' />

        <Title>
          O banco com bugs e falhas do seu jeito
        </Title>
        <Text>
          Faça transferências e pagamentos com bugs e pratique testes com sucesso em um cenário quase real!
        </Text>
      </TitleBackground>
      <FormBackground>
        <Wrapper isLogin={isLogin}>
          {isLogin ? (
            <>
              <InputText value={email} onChange={(t) => setEmail(t)} label='Email' type='text' />
              <InputText value={password} onChange={(t) => setPassword(t)} label='Senha' type='password' />

              <ContainerButton>
                <Button onClick={handleLogin}>Acessar</Button>
                <Button onClick={handleRegister} outline>Registrar</Button>
              </ContainerButton>

              <LinkText href='/'>Conheça nossos requisitos</LinkText>
            </>
          ) : (
            <>
              <ContainerBackButton>
                <HiOutlineArrowNarrowLeft size={26} style={{ color: '#A422E3' }} />
                <BackText onClick={handleBackButton} href='/'>Voltar ao login</BackText>
              </ContainerBackButton>

              <InputText value={name} onChange={(t) => setName(t.target.value)} label='Nome' type='text' />
              <InputText value={email} onChange={(t) => setEmail(t.target.value)} label='Email' type='email' />
              <InputText value={password} onChange={(t) => setPassword(t.target.value)} label='Senha' type='password' />
              <InputText value={passwordConfirmation} onChange={(t) => setPasswordConfirmation(t.target.value)} label='Confirmar senha' type='password' />

              <ContainerToggle>
                <ToggleText>
                  Criar conta com saldo ?
                </ToggleText>
                <ToggleSwitch isChecked={isChecked} onClick={handleChecked} />
              </ContainerToggle>

              <Button onClick={handleRegister} secondary>Cadastrar</Button>
            </>
          )}
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
      border-right: none;

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
  height: ${(props) => (props.isLogin ? '42rem' : '58rem')};
  margin-top: 2rem;
  align-items: center;
  justify-content: space-around;

  grid-area: form;

  @media(max-width: 460px){
    width: 20rem;
  }
`

const ContainerBackButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const BackText = styled.a`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.primary};
  padding-left: 1rem;

  &:hover {
    opacity: 0.8
  }

  @media(max-width: 460px){
    font-size: 1.6rem;
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

const ContainerToggle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 760px){
    flex-direction: column;
    height: 12rem;
  }
`

const ToggleText = styled.p`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.primary};

  @media(max-width: 760px){
    font-size: 2rem;
    line-height: 1;
    max-width: 34rem;
    margin-top: 3.5rem;
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

  ${props => props.secondary && css`
    width: 100%;
    background: ${(props) => props.theme.colors.secondary};`
  }

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 760px){
    width: 100%;
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

  @media(max-width: 760px){
    font-size: 2rem;
    line-height: 1;
    max-width: 34rem;
    margin-top: 3.5rem;
  }
`

export default Index;
