import Image from 'next/image'

import {
  Container,
  Header,
  ContainerLink,
  ContainerInformations,
  ContainerInfos,
  InitialLetterName,
  LetterName,
  ContainerText,
  ContainerAccountNumber,
  Text,
  ContainerOptions,
  ContainerBalance,
  ContainerButtons,
  Button,
  Footer
} from './styles'

import LinkText from '../../components/LinkText'

const buttons = [
  {
    "href": "/",
    "src": "/imgs/transfer.png"
  },
  {
    "href": "/",
    "src": "/imgs/payments.png"
  },
  {
    "href": "/",
    "src": "/imgs/bank-statement.png"
  },
  {
    "href": "/",
    "src": "/imgs/withdraw.png"
  }
]

function Home() {
  return (
    <Container>

      <Header>
        <Image src='/imgs/bugbank.png' width='150' height='54' />
        <ContainerLink>
          <LinkText href='/'>Sair</LinkText>
        </ContainerLink>
      </Header>

      <ContainerInformations>
        <ContainerInfos>
          <InitialLetterName>
            <LetterName>J</LetterName>
          </InitialLetterName>
          <ContainerText>
            <Text>{`Olá Jhonatas Matos,`}</Text>
            <Text>{`bem vindo ao BugBank :)`}</Text>
          </ContainerText>

          <ContainerAccountNumber>
            <Text>Conta digital: <span>{`123-4`}</span></Text>
          </ContainerAccountNumber>
        </ContainerInfos>
      </ContainerInformations>

      <ContainerOptions>
        <ContainerBalance>
          <Text>Saldo em conta <span>R$ 1.000,00</span></Text>
        </ContainerBalance>
        <ContainerButtons>
          {buttons.map((button) =>
            <Button href={button.href}>
              <Image src={button.src} width='60' height='60' s />
            </Button>
          )}
        </ContainerButtons>
      </ContainerOptions>

      <Footer>
        <Text>Obrigado por escolher o nosso banco</Text>
      </Footer>
    </Container>
  )
}

export default Home;
