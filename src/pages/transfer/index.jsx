import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import cookie from 'js-cookie'
import Image from 'next/image'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import styled, { css } from 'styled-components'

import LinkText from '../../components/LinkText'
import InputText from '../../components/InputText'
import Modal from '../../components/Modal'

function Transfer() {
  const [accountNumber, setAccountNumber] = useState('')
  const [digit, setDigit] = useState('')
  const [transferValue, setTransferValue] = useState('')
  const [description, setDescription] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [modalText, setModalText] = useState('')
  const [modalType, setModalType] = useState('error')
  const router = useRouter()

  const handleBackButton = () => {
    router.back()
  }

  const handleTransfer = () => {
    const items = allStorage()

    if(Number(transferValue) < 0 || Number(transferValue) === 0){
      setModalText('Valor da transferência não pode ser 0 ou negativo')
      setOpenModal(true)
      setModalType('error')

      return
    }

    let account
    items.map((item) => {
      if (item.includes(`${accountNumber}-${digit}`)) {
        account = JSON.parse(item)
      }
    })

    if(!account){
      setModalText('Conta inválida ou inexistente')
      setOpenModal(true)
      setModalType('error')

      return
    }

    if(account.email === router.query.user){
      setModalText('Nao pode transferir pra mesmo conta')
      setOpenModal(true)
      setModalType('error')

      return
    }

    const myAccount = localStorage.getItem(router.query.user)
    const myAccountFormatted = JSON.parse(myAccount)

    if(myAccountFormatted.balance < transferValue) {
      setModalText('Você não tem saldo suficiente para essa transação')
      setOpenModal(true)
      setModalType('error')

      return
    }

    myAccountFormatted.balance = Number(myAccountFormatted.balance) - Number(transferValue)
    localStorage.setItem(myAccountFormatted.email, JSON.stringify(myAccountFormatted))

    account.balance = Number(account.balance) + Number(transferValue)
    localStorage.setItem(account.email, JSON.stringify(account))

    setModalText('Transferencia realizada com sucesso')
    setOpenModal(true)
    setModalType('ok')


  }

  const closeModal = () => {
    setOpenModal(false)
    router.back()
  }

  const handleLogout = () => {
    setSession(false)
    router.push('/')
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

  const allStorage = () => {

    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    return values;
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
      <Header>
        <Image src='/imgs/bugbank.png' width='150' height='54' />
        <ContainerLink onClick={handleLogout}>
          <LinkText>Sair</LinkText>
        </ContainerLink>
      </Header>

      <ContainerTexts>
        <ContainerBackButton onClick={handleBackButton}>
          <HiOutlineArrowNarrowLeft size={34} style={{ color: '#fff' }} />
          <BackText>Voltar</BackText>
        </ContainerBackButton>

        <TextInformation>
          Realize transferência de valores entre contas BugBank com taxa <span>0</span> e em poucos segundos.
        </TextInformation>
      </ContainerTexts>

      <ContainerForm>
        <Form>
          <FormTitle>Informações para transferência</FormTitle>

          <ContainerAccountNumber>
            <InputText value={accountNumber} onChange={(t) => setAccountNumber(t.target.value)} label='Número da conta' type='number' />
            <InputText value={digit} onChange={(t) => setDigit(t.target.value)} label='Dígito' type='number' />
          </ContainerAccountNumber>
          <InputText value={transferValue} onChange={(t) => setTransferValue(t.target.value)} label='Valor da transferência' type='number' />
          <InputText value={description} onChange={(t) => setDescription(t.target.value)} label='Descrição' type='text' />

          <Button onClick={handleTransfer} secondary>Transferir agora</Button>
        </Form>
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

const Button = styled.a`
  display: flex;
  width: 16rem;
  height: 5rem;
  border-radius: 0.8rem;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));

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

  @media(max-width: 780px){
    width: 100%;
  }
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 5rem;
  width: 50rem;
  height: 44rem;
  margin-top: 5rem;
  border-radius: 2rem;

  background: ${(props) => props.theme.colors.white};
  grid-area: form;
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
