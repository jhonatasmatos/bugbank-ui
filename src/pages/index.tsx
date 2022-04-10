import { useState } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';

import logo from '../../public/imgs/bugbank.png';

//COMPONENTS
import { FormLogin, Modal, HeadLinks } from '../components';
import { FormRegister } from '../components/FormRegister';

function Index() {
  const [isLogin, setLogin] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [modalType, setModalType] = useState('error');

  function callModal(type: string, message: string) {
    setModalType(type);
    setModalText(message);
    setOpenModal(true);
  }

  const changeToRegister = () => {
    setLogin((prevState) => !prevState);
  };

  const handleBackButton = () => {
    setLogin((prevState) => !prevState);
  };

  return (
    <Background>
      <HeadLinks />
      <TitleBackground>
        <Image src={logo} width="240" height="88" placeholder="blur" />

        <Title>O banco com bugs e falhas do seu jeito</Title>
        <Text>
          Faça transferências e pagamentos com bugs e pratique testes com
          sucesso em um cenário quase real!
        </Text>
      </TitleBackground>

      <FormBackground>
        <Wrapper isLogin={isLogin}>
          <div className="card__login">
            <FormLogin onRegister={changeToRegister} onCallModal={callModal} />
          </div>
          <div className="card__register">
            <FormRegister onBack={handleBackButton} onCallModal={callModal} />
          </div>
        </Wrapper>
      </FormBackground>
      {openModal && (
        <Modal
          type={modalType}
          text={modalText}
          onClose={() => setOpenModal(false)}
        />
      )}
    </Background>
  );
}

type WrapperProps = {
  isLogin: boolean;
};

const Background = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 60% auto;
  grid-template-areas: 'title form';

  @media (max-width: 960px) {
    grid-template-areas:
      'title'
      'form';
  }
`;

const TitleBackground = styled.div`
  padding-top: 4rem;
  padding-left: 6rem;
  border-right: 2px solid ${(props) => props.theme.colors.primary};

  grid-area: title;

  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );

  @media (max-width: 960px) {
    width: 100vw;
    border-right: none;

    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  }
`;

const FormBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  grid-area: form;
  background: ${(props) => props.theme.colors.white};

  @media (max-width: 960px) {
    width: 100vw;
  }
`;

const Wrapper = styled.div<WrapperProps>`
  width: 35rem;
  height: ${(props) => (props.isLogin ? '42rem' : '58rem')};
  margin-top: 2rem;
  grid-area: form;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  .card__login,
  .card__register {
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
  }
  .card__login {
    ${(props) =>
      !props.isLogin &&
      css`
        z-index: 0;
      `}
  }

  .card__register {
    transform: rotateY(180deg);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  ${(props) =>
    !props.isLogin &&
    css`
      transform: rotateY(180deg);
    `}

  @media(max-width: 460px) {
    width: 20rem;
  }
`;

const Title = styled.h1`
  font-size: 5.4rem;
  font-weight: bold;
  line-height: 1.2;
  max-width: 40rem;
  margin-top: 6rem;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 460px) {
    font-size: 3.4rem;
    font-weight: bold;
    line-height: 1;
    max-width: 24rem;
  }
`;

const Text = styled.p`
  font-size: 2.4rem;
  line-height: 1.2;
  max-width: 44rem;
  margin-top: 10rem;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 760px) {
    font-size: 2rem;
    line-height: 1;
    max-width: 34rem;
    margin-top: 3.5rem;
  }
`;

export default Index;
