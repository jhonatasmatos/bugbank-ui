import { useState } from 'react';
import styled from 'styled-components';

import Image from 'next/image';

import { Accordion, LinkText, WarningText, HeadLinks } from '../../components';

import logo from '../../../public/imgs/bugbank.png';
import img from '../../../public/imgs/requirements.png';

function Requirements() {
  const [accordionOpened, setAccordionOpened] = useState('');

  const toggleAccordionOpened = (accordion) => {
    if (accordionOpened === accordion) {
      setAccordionOpened('');
    } else {
      setAccordionOpened(accordion);
    }
  };

  const reqs = [
    {
      title: 'Login',
      description: [
        '- Email e Senha são campos obrigatórios.\n\n',
        '- Tentativa de acesso sem preencher campos obrigatórios deve exibir a mensagem "Usuário e senha precisam ser preenchidos".\n\n',
        '- Não deve autorizar o acesso para usuários inválidos ou não cadastrados.\n\n',
        '- Usuários válidos e cadastros são direcionados para a home.\n\n',
      ],
    },
    {
      title: 'Cadastro',
      description: [
        '- Os campos Nome, Email, Senha e Confirmação de senha são de preenchimento obrigatório\n\n',
        '- Tentativa de cadastro sem preencher nome deve visualizar a mensagem "Nome não pode ser vazio"\n\n',
        '- Tentativa de cadastro sem preencher email deve visualizar a mensagem "Email não pode ser vazio"\n\n',
        '- Tentativa de cadastro sem preencher senha deve visualizar a mensagem "Senha não pode ser vazio"\n\n',
        '- Tentativa de cadastro sem preencher confirmação de senha deve visualizar a mensagem "Confirmar senha não pode ser vazio"\n\n',
        '- Deixar ativo a opção "Criar conta com saldo" deve criar conta com saldo de R$ 1.000,00\n\n',
        '- Deixar inativo a opção "Criar conta com saldo" deve criar conta com saldo de R$ 0,00\n\n',
        '- Senha e confirmação de senha precisam ser iguais\n\n',
        '- Cadastrar conta com sucesso deve exibir número da conta criada\n\n',
      ],
    },
    {
      title: 'Transferência',
      description: [
        '- Só é permitido transferência para contas válidas\n\n',
        '- Só é permitido transferência quando saldo é igual ou maior que valor para transferir\n\n',
        '- Tentativa de transferência para conta inválida deve exibir mensagem de erro "Conta inválida ou inexistente"\n\n',
        '- Número e digito da conta aceitam apenas númros\n\n',
        '- Campo descrição é um campo de preenchimento obrigatório\n\n',
        '- Valor de transferência não pode ser igual ou menor que zero\n\n',
        '- Ao realizar transferência com sucesso deve ser debitado o valor da conta e exibir a mensagem de "Transferência realizada com sucesso"\n\n',
        '- Ao realizar uma transferência com sucesso deve ser redirecionado para o extrato\n\n',
      ],
    },
    {
      title: 'Pagamento',
      description: ['- Em desenvolvimento\n'],
    },
    {
      title: 'Extrato',
      description: [
        '- Deve exibir o saldo disponível no momento\n\n',
        '- Cada transação deve exibir data que foi realizada, tipo da transação (Abertura de conta / Transferência enviada / Transferência recebida)',
        '- Quando valor for de saida da conta deve estar em vermelho e iniciar com o sinal de menos/negativo(-)\n\n',
        '- Quando valor for de entrada na conta deve estar em verde\n\n',
        '- Transações sem comentário devem exibir (-)\n\n',
      ],
    },
    {
      title: 'Saque',
      description: ['- Em desenvolvimento\n'],
    },
  ];

  return (
    <Container>
      <HeadLinks />
      <Header>
        <LinkText href="/">
          <Image src={logo} width="150" height="54" placeholder="blur" />
        </LinkText>
        <ContainerLink>
          <LinkText id="btnBack" href="/">
            Voltar
          </LinkText>
        </ContainerLink>
      </Header>

      <ContainerImage>
        <ContentImage>
          <Image src={img} width="245" height="245" placeholder="blur" />
          <Text>Gostou do projeto e quer contribuir?</Text>
          <Link id="linkGithub" href="https://github.com/jhonatasmatos/bugbank">
            Acesse o link do repositório clicando aqui
          </Link>

          <WarningText color="white">
            A aplicação não conta com um banco de dados, todas as informações
            são armazenadas em <span>memória local</span>
          </WarningText>
        </ContentImage>
      </ContainerImage>

      <ContainerRequirements>
        {reqs.map((req, index) => (
          <Accordion
            key={index}
            id={req.title}
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
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 40% auto;
  grid-template-rows: 7.4rem auto 5.4rem;
  grid-gap: 2rem;
  grid-template-areas:
    'header header'
    'image requirements'
    'footer footer';

  overflow: auto;

  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;

  grid-area: header;

  @media (max-width: 600px) {
    margin-top: 1.2rem;
  }
`;

const ContainerLink = styled.div`
  display: flex;
  width: 10rem;
  height: 3.4rem;
  border-radius: 0.6rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background: ${(props) => props.theme.colors.white};

  @media (max-width: 600px) {
    width: 4rem;
    height: 3rem;
  }
`;

const ContainerImage = styled.div`
  display: flex;
  justify-content: center;

  grid-area: image;
`;

const ContentImage = styled.div`
  display: flex;
  max-width: 36rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  padding: 1rem 3rem;
  decoration: none;
  font-size: 1.6rem;
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 0.8rem;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    opacity: 0.5;
  }
`;

const ContainerRequirements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  grid-area: requirements;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding: 0 4rem;

  grid-area: footer;

  @media (max-width: 780px) {
    justify-content: center;
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  text-align: center;
  line-height: 1.4;

  @media (max-width: 780px) {
    font-size: 1.4rem;
  }
`;

export default Requirements;
