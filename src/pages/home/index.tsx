import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import cookie from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';

import { LinkText, Modal, HeadLinks } from '../../components';

import logo from '../../../public/imgs/bugbank.png';

const buttons = [
  {
    href: '/transfer',
    src: '/imgs/transfer.png',
    name: 'TRANSFERÊNCIA',
  },
  {
    href: '/',
    src: '/imgs/payments.png',
    name: 'PAGAMENTOS',
  },
  {
    href: '/bank-statement',
    src: '/imgs/bank-statement.png',
    name: 'EXTRATO',
  },
  {
    href: '/',
    src: '/imgs/withdraw.png',
    name: 'SAQUE',
  },
];

interface UserProps {
  name: string;
  email: string;
  password: string;
  accountNumber: string;
  balance: number;
  logged: boolean;
}

function Home() {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [modalType, setModalType] = useState('error');
  const [loggedUser, setLoggedUser] = useState<UserProps>({
    name: '',
    email: '',
    password: '',
    accountNumber: '',
    balance: 0,
    logged: false,
  });

  useEffect(() => {
    const users = allStorage();

    users.map((user) => {
      const u = JSON.parse(user);

      if (u.logged) {
        setLoggedUser(u);
      }
    });
  }, [setLoggedUser]);

  const allStorage = () => {
    const values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    return values;
  };

  const handleLogout = () => {
    loggedUser.logged = false;
    localStorage.setItem(loggedUser.email, JSON.stringify(loggedUser));

    setSession(false);
    router.push('/');
  };

  const setSession = (session) => {
    if (session) {
      cookie.set('bugbank-auth', session, {
        expires: 1,
        path: '/',
      });
    } else {
      cookie.remove('bugbank-auth');
    }
  };

  const handleNavigate = (href) => {
    if (href !== '/transfer' && href !== '/bank-statement') {
      setModalText('Funcionalidade em desenvolvimento');
      setOpenModal(true);
      setModalType('alert');
    } else {
      router.push({
        pathname: href,
      });
    }
  };

  const formatValue = (value) => {
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  };

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
        <LinkText href="/home">
          <Image src={logo} width="150" height="54" placeholder="blur" />
        </LinkText>
        <ContainerLink onClick={handleLogout}>
          <LinkText id="btnExit">Sair</LinkText>
        </ContainerLink>
      </Header>

      <ContainerInformations>
        <ContainerInfos>
          <InitialLetterName>
            <LetterName>
              {loggedUser.name.substr(0, 1).toUpperCase()}
            </LetterName>
          </InitialLetterName>
          <ContainerText>
            <Text id="textName">{`Olá ${loggedUser.name},`}</Text>
            <Text>{`bem vindo ao BugBank :)`}</Text>
          </ContainerText>

          <ContainerAccountNumber>
            <Text id="textAccountNumber">
              Conta digital: <span>{loggedUser.accountNumber}</span>
            </Text>
          </ContainerAccountNumber>
        </ContainerInfos>
      </ContainerInformations>

      <ContainerOptions>
        <ContainerBalance>
          <Text id="textBalance">
            Saldo em conta <span>{formatValue(loggedUser.balance)}</span>
          </Text>
        </ContainerBalance>
        <ContainerButtons>
          {buttons.map((button) => (
            <ContainerButton key={button.src}>
              <Button
                id={`btn-${button.name}`}
                onClick={() => handleNavigate(button.href)}
              >
                <Image
                  src={button.src}
                  width="50"
                  height="50"
                  placeholder="blur"
                  blurDataURL="#"
                />
              </Button>
              <TransactionText>{button.name}</TransactionText>
            </ContainerButton>
          ))}
        </ContainerButtons>
      </ContainerOptions>

      <Footer>
        <Text>Obrigado por escolher o nosso banco</Text>
      </Footer>
      {openModal && (
        <Modal
          type={modalType}
          text={modalText}
          onClose={() => setOpenModal(false)}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 30% auto;
  grid-template-rows: 7.4rem auto 5.4rem;
  grid-template-areas:
    'header header'
    'profile options'
    'footer footer';

  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );

  @media (max-width: 600px) {
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

const ContainerInformations = styled.div`
  width: 100%;
  height: 100%;

  grid-area: profile;

  @media (max-width: 600px) {
    height: 70%;
  }
`;

const ContainerInfos = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-right: 1px solid ${(props) => props.theme.colors.white};

  @media (max-width: 600px) {
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
    border-right: none;
  }
`;

const InitialLetterName = styled.div`
  display: flex;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;

  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors.black};

  @media (max-width: 760px) {
    width: 10rem;
    height: 10rem;
  }
`;

const LetterName = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 5.4rem;
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin-top: 2.4rem;

  align-items: center;
  justify-content: center;
`;

const ContainerAccountNumber = styled.div`
  display: flex;
  width: 30rem;
  margin-top: 5rem;

  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    margin-top: 1.4rem;
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  text-align: center;
  line-height: 1.4;
  margin: 0;

  span {
    font-weight: bold;
  }

  @media (max-width: 760px) {
    font-size: 1.4rem;
  }
`;

const TransactionText = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.6rem;
  text-align: center;

  @media (max-width: 760px) {
    font-size: 1rem;
  }
`;

const ContainerOptions = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-area: options;

  grid-template-rows: 2fr 3fr 1fr;
  grid-template-areas:
    'balance'
    'buttons'
    'footer';

  @media (max-width: 600px) {
    height: 90%;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;

const ContainerBalance = styled.div`
  display: flex;
  width: 100%;
  height: 5.4rem;
  align-items: center;
  justify-content: center;

  grid-area: balance;
`;

const ContainerButtons = styled.div`
  display: flex;
  height: 100%;
  padding: 0 12rem;
  align-items: center;
  justify-content: space-between;

  grid-area: buttons;

  @media (max-width: 1100px) {
    padding: 0 5rem;
  }

  @media (max-width: 760px) {
    padding: 0 3rem;
  }

  @media (max-width: 600px) {
    padding: 0 3rem;
    overflow: visible;
  }
`;

const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  height: 20rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    height: 14rem;
    width: 10rem;
  }
`;

const Button = styled.a`
  display: flex;
  flex-direction: column;
  width: 14rem;
  height: 14rem;
  border-radius: 1.2rem;
  cursor: pointer;

  align-items: center;
  justify-content: center;

  border: 1px solid ${(props) => props.theme.colors.white};
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));

  background-image: linear-gradient(
    40deg,
    ${(props) => props.theme.colors.secondary} 26%,
    rgba(164, 34, 227, 0) 80%
  );

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s;
  }

  @media (max-width: 1100px) {
    width: 10rem;
    height: 10rem;
  }

  @media (max-width: 600px) {
    width: 8rem;
    height: 8rem;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0.5rem 4rem;
  align-items: center;
  justify-content: flex-end;

  grid-area: footer;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export default Home;
