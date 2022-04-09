import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import styled from 'styled-components'
import cookie from 'js-cookie'

import {
  LinkText,
  FormTransfer,
  Modal,
  HeadLinks
} from '../../components'

import { useAuth } from '../../providers/auth'

import getDateNow from '../../utils/date'

import logo from '../../../public/imgs/bugbank.png'

function Transfer() {
  const [accountNumber, setAccountNumber] = useState('')
  const [digit, setDigit] = useState('')
  const [transferValue, setTransferValue] = useState('')
  const [description, setDescription] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [modalText, setModalText] = useState('')
  const [modalType, setModalType] = useState('error')
  const [redirect, setRedirect] = useState(false)
  const router = useRouter()
  const { user } = useAuth()

  const handleBackButton = () => {
    router.back()
  }

  function callModal(message: string) {
    setModalType('error')
    setModalText(message)
    setOpenModal(true)
  }

  const closeModal = () => {
    setOpenModal(false)

    if(redirect){
      router.push('/bank-statement')
    }
  }

  const setSession = (session) => {
    if (session) {
      cookie.set('bugbank-auth', session, {
        expires: 1,
        path: '/'
      })
    } else {
      cookie.remove('bugbank-auth')
    }
  }


  const handleLogout = () => {
    setSession(false)
    router.push('/')
  }


  return (
    <Container>
      <Head>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              if (!document.cookie || !document.cookie.includes('bugbank-auth')) {
                window.location.href = "/"
              }
            `,
          }}
        />
      </Head>
      <HeadLinks />
      <Header>
        <LinkText href='/home'>
          <Image src={logo} width='150' height='54' placeholder='blur' />
        </LinkText>
        <ContainerLink onClick={handleLogout}>
          <LinkText id='btnExit'>Sair</LinkText>
        </ContainerLink>
      </Header>

      <ContainerTexts>
        <ContainerBackButton onClick={handleBackButton}>
          <HiOutlineArrowNarrowLeft size={34} style={{ color: '#fff' }} />
          <BackText id='btnBack'>Voltar</BackText>
        </ContainerBackButton>

        <TextInformation>
          Realize transferência de valores entre contas BugBank com taxa <span>0</span> e em poucos segundos.
        </TextInformation>
      </ContainerTexts>

      <ContainerForm>
        <FormTransfer onCallModal={callModal} />
        {/* <Form>
          <FormTitle>Informações para transferência</FormTitle>

          <ContainerAccountNumber>
            <InputText
              value={accountNumber}
              onChange={(t) => setAccountNumber(t.target.value)}
              id='inputAccountNumber'
              label='Número da conta'
              type='number'
            />
            <InputText
              value={digit}
              onChange={(t) => setDigit(t.target.value)}
              id='inputAccountDigit'
              label='Dígito'
              type='number'
            />
          </ContainerAccountNumber>
          <InputText
            value={transferValue}
            onChange={(t) => setTransferValue(t.target.value)}
            id='inputTransferValue'
            label='Valor da transferência'
            type='number'
          />
          <InputText
            value={description}
            onChange={(t) => setDescription(t.target.value)}
            id='inputDescription'
            label='Descrição'
            type='text'
          />

          <Button id='btnTransferNow' onClick={handleTransfer} secondary>Transferir agora</Button>
        </Form> */}
      </ContainerForm>

      <Footer>
        <Text>Obrigado por escolher o nosso banco</Text>
      </Footer>
      {openModal && (
        <Modal type={modalType} text={modalText} onClose={() => closeModal()} />
      )}
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 7.4rem auto 5.4rem;
  grid-template-areas:
    "header header"
    "texts form"
    "footer footer";

  background-image: linear-gradient(
    to right bottom, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary});

    @media(max-width: 780px){
      display: flex;
      flex-direction: column;
      height: 100%;
    }
`

const Header = styled.div`
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

const ContainerLink = styled.div`
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

const ContainerTexts = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  grid-area: texts;
`

const ContainerBackButton = styled.div`
  width: 100%;
  display: flex;
  padding: 0 4rem;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`

const BackText = styled.a`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.white};
  padding-left: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8
  }

  @media(max-width: 460px){
    font-size: 1.6rem;
  }
`

const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  text-align: center;
  line-height: 1.4;

  @media(max-width: 780px){
    font-size: 1.4rem;
  }
`

const TextInformation = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 2.4rem;
  text-align: center;
  line-height: 1.4;
  max-width: 30rem;
  margin-top: 7rem;

  span {
    font-weight: bold;
  }
`

const FormTitle = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 2rem;
`

const ContainerAccountNumber = styled.div`
  display: grid;
  grid-template-columns: auto 20%;
  grid-gap: 1rem;
`

const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  grid-area: form;
`



const Form = styled.div`

`

const Footer = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
  padding: 0.5rem 0rem;
  align-items: center;
  justify-content: flex-end;
  padding: 0 4rem;

  grid-area: footer;

  @media(max-width: 780px){
    justify-content: center;
  }
`

export default Transfer;
