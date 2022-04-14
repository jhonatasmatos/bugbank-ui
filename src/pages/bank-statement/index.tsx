import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import Head from 'next/head';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import styled from 'styled-components';

import Image from 'next/image';

import { LinkText, HeadLinks } from '../../components';

import logo from '../../../public/imgs/bugbank.png';
import img from '../../../public/imgs/transfer_money.svg';

interface UserProps {
  name: string;
  email: string;
  password: string;
  accountNumber: string;
  balance: number;
  logged: boolean;
}

function BankStatement() {
  const router = useRouter();
  const [trxs, setTrxs] = useState([]);
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
        getTransactions(u.email);
      }
    });
  }, [setLoggedUser]);

  const getTransactions = (userEmail: string) => {
    const trxStorage = localStorage.getItem(`transaction:${userEmail}`);
    const trxsParsed = JSON.parse(trxStorage);
    setTrxs(trxsParsed);
  };

  const allStorage = () => {
    const values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    return values;
  };

  const handleBackButton = () => {
    router.back();
  };

  const handleLogout = () => {
    loggedUser.logged = false;
    localStorage.setItem(loggedUser.email, JSON.stringify(loggedUser));

    setSession(false);
    router.push('/');
  };

  const formatValue = (value) => {
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
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

      <ContainerImage>
        <ContainerBackButton onClick={handleBackButton}>
          <HiOutlineArrowNarrowLeft size={34} style={{ color: '#fff' }} />
          <BackText id="btnBack">Voltar</BackText>
        </ContainerBackButton>

        <ContainerContent>
          <Image
            src={img}
            width="400"
            height="400"
            placeholder="blur"
            blurDataURL="#"
          />
        </ContainerContent>
      </ContainerImage>

      <ContainerReceipt>
        <ContainerTransactions>
          <ContainerBalance>
            <LabelText>Saldo disponível</LabelText>
            <BalanceText id="textBalanceAvailable">
              {formatValue(loggedUser.balance)}
            </BalanceText>
          </ContainerBalance>

          <ContainerTransaction>
            {trxs.map((t) => (
              <Transaction key={t.id}>
                <ContainerDateAndType>
                  <Date id="textDateTransaction">{t.date}</Date>
                  <TypeTransaction id="textTypeTransaction">
                    {t.type == 'withdrawal' && 'Transferência enviada'}
                    {t.type == 'input' && 'Transferência recebida'}
                    {t.type !== 'withdrawal' &&
                      t.type !== 'input' &&
                      'Abertura de conta'}
                  </TypeTransaction>
                </ContainerDateAndType>
                <ContainerDescAndValue>
                  <Description id="textDescription">
                    {t.description.length === 0 ? '-' : t.description}
                  </Description>
                  <Value type={t.type} id="textTransferValue">
                    {formatValue(t.transferValue)}
                  </Value>
                </ContainerDescAndValue>
              </Transaction>
            ))}
          </ContainerTransaction>
        </ContainerTransactions>
      </ContainerReceipt>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 7.4rem auto;
  grid-template-areas:
    'header header'
    'image receipt';

  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;

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
  flex-direction: column;
  padding-top: 5rem;

  grid-area: image;
`;

const ContainerContent = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

const ContainerBackButton = styled.div`
  width: 100%;
  display: flex;
  padding: 0 4rem;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const BackText = styled.a`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.white};
  padding-left: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 460px) {
    font-size: 1.6rem;
  }
`;

const ContainerReceipt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  grid-area: receipt;
`;

const ContainerTransactions = styled.div`
  width: 50rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 2rem;

  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  border-radius: 0.8rem;
  background: ${(props) => props.theme.colors.white};
`;

const ContainerBalance = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: start;
  margin-bottom: 2rem;
  padding: 0.5rem 1.2rem;

  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
`;

const LabelText = styled.p`
  color: ${(props) => props.theme.colors.secondary};
`;

const BalanceText = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};
`;

const ContainerTransaction = styled.div`
  width: 100%;
  height: 40rem;
`;

const Transaction = styled.div`
  display: block;
  flex-direction: column;
  width: 100%;
  border-radius: 0.6rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0 3rem;

  border: 1px solid ${(props) => props.theme.colors.secondary};
`;

const ContainerDateAndType = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerDescAndValue = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TypeTransaction = styled.p`
  color: ${(props) => props.theme.colors.primary};
`;
type ValueProps = {
  type: string;
};
const Value = styled.p`
  font-weight: bold;
  color: ${(p: ValueProps) => (p.type !== 'withdrawal' ? 'green' : 'red')};
`;

const Description = styled.p`
  max-width: 20rem;
  color: ${(props) => props.theme.colors.primary};
`;

const Date = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.primary};
`;

export default BankStatement;
