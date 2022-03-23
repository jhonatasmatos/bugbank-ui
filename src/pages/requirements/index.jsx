import { useState } from 'react'
import styled from 'styled-components'

import Image from 'next/image'

import LinkText from '../../components/LinkText'
import Accordion from '../../components/Accordion'
import HeadLinks from '../../components/HeadLinks'

import logo from '../../../public/imgs/bugbank.png'
import requirement from '../../../public/imgs/requirements.svg'

function Requirements() {
  const [accordionOpened, setAccordionOpened] = useState(null);

  const toggleAccordionOpened = (accordion) => {
    if (accordionOpened === accordion) {
      setAccordionOpened(null);
    } else {
      setAccordionOpened(accordion);
    }
  };


  const reqs = [
    {
      title: "Login",
      description: "Obrigado por escolher o nosso banco Obrigado por escolher o nosso banco  Obrigado por escolher o nosso banco Obrigado por escolher o nosso banco Obrigado por escolher o nosso banco"
    },
    {
      title: "Cadastro",
      description: "Obrigado por escolher o nosso banco Obrigado por escolher o nosso banco  Obrigado por escolher o nosso banco Obrigado por escolher o nosso banco Obrigado por escolher o nosso banco"
    },
    {
      title: "Transferência",
      description: "Obrigado por escolher o nosso banco Obrigado por escolher o nosso banco  Obrigado por escolher o nosso banco Obrigado por escolher o nosso banco Obrigado por escolher o nosso banco"
    },
    {
      title: "Pagamento",
      description: "Obrigado por escolher o nosso banco Obrigado por escolher o nosso banco  Obrigado por escolher o nosso banco Obrigado por escolher o nosso banco Obrigado por escolher o nosso banco"
    },
    {
      title: "Extrato",
      description: "or sit amet, consectetur adipiscing elit. Cras sodales, massa id feugiat porta, ligula tortor consectetur eros, ut auctor felis dolor suscipit tortor. Sed eu augue est. Duis rhoncus ultrices turpis, at accumsan metus vehicula ac. Duis leo arcu, tincidunt vitae aliquet a, viverra sed orci. Morbi porttitor sed enim quis vehicula. Donec vel suscipit justo. Nunc id augue eu nisl vulputate dictum ultricies quis quam. Cras porta felis eu ullamcorper iaculis. Nulla facilisi. Quisque suscipit dui et ipsum pharetra, a blandit metus scelerisque. Nam efficitur imperdiet mi, eget finibus tellus hendrerit id. Mauris condimentum viverra massa ac viverra. Nulla lorem sem, faucibus ac magna quis, ornare porta risus. Aliquam erat volutpat. Sed accumsan,"
    },
    {
      title: "Saque",
      description: "Obrigado por escolher o nosso banco Obrigado por escolher o nosso banco  Obrigado por escolher o nosso banco Obrigado por escolher o nosso banco Obrigado por escolher o nosso banco"
    },
  ]

  return (
    <Container>
      <HeadLinks />
      <Header>
        <LinkText href='/'>
          <Image src={logo} width='150' height='54' placeholder='blur' />
        </LinkText>
        <ContainerLink>
          <LinkText href='/'>Voltar</LinkText>
        </ContainerLink>
      </Header>

      <ContainerImage>
        <Image src={requirement} width='450' height='250' placeholder='blur' />

        <Text>Gostou do projeto e quer contribuir?</Text>
        <Link href='https://github.com/jhonatasmatos/bugbank'>Acesse o link do repositório clicando aqui</Link>
      </ContainerImage>

      <ContainerRequirements>
        {reqs.map((req, index) => (
          <Accordion
            key={index}
            accordionOpened={accordionOpened}
            setAccordionOpened={toggleAccordionOpened}
            {...req}
          />
        ))}
      </ContainerRequirements>

      <Footer>
        <Text>Obrigado por escolher o nosso banco</Text>
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 40% auto;
  grid-template-rows: 7.4rem auto 5.4rem;
  grid-gap: 2rem;
  grid-template-areas:
    "header header"
    "image requirements"
    "footer footer";

  overflow: auto;

  background-image: linear-gradient(
    to right bottom, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary});

  @media(max-width: 760px){
    display: flex;
    flex-direction: column
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

const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  grid-area: image;
`

const Link = styled.a`
  decoration: none;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    opacity: 0.5;
  }
`

const ContainerRequirements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  grid-area: requirements;
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

const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  text-align: center;
  line-height: 1.4;

  @media(max-width: 780px){
    font-size: 1.4rem;
  }
`

export default Requirements;

