import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import Image from 'next/image';

import {
  ContainerFormRegister,
  ContainerBackButton,
  ContainerToggle,
  ToggleText,
  BackText,
} from './styles';

import { FieldInput, ToggleSwitch, Button } from '../../components';

// UTILS
import { YupMessage } from '../../utils/yupMessagens';
import { CustomIcons } from '../../assets/icons';

// VALIDATION
const schema = yup.object({
  name: yup.string(),
  email: yup
    .string()
    .email(YupMessage.invalidformat)
    .required(YupMessage.requiredField),
  password: yup.string().required(YupMessage.requiredField),
  passwordConfirmation: yup.string().required(YupMessage.requiredField),
});

import getDateNow from '../../utils/date';

export type FormRegisterProps = {
  onBack: () => void;
  onCallModal: (type: string, message: string) => void;
};

export const FormRegister = ({ onBack, onCallModal }: FormRegisterProps) => {
  const [isChecked, setChecked] = useState(false);
  const [typeInputPassword, setTypeInputPassword] = useState('password');
  const [typeInputPasswordConfirmation, setTypeInputPasswordConfirmation] =
    useState('password');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const handleRegister = (data) => {
    const { name, email, password, passwordConfirmation } = data;
    if (!name) {
      onCallModal('error', 'Nome não pode ser vazio.\n');
      return;
    }

    if (!email) {
      onCallModal('error', 'Email não pode ser vazio.\n');
      return;
    }

    if (!password) {
      onCallModal('error', 'Senha não pode ser vazio.\n');
      return;
    }

    if (!passwordConfirmation) {
      onCallModal('error', 'Confirmação de senha não pode ser vazio.\n');
      return;
    }

    if (data.password !== data.passwordConfirmation) {
      onCallModal('error', 'As senhas não são iguais.\n');
      return;
    }

    const account = generateAccountNumber();
    const user = {
      name,
      email,
      password,
      accountNumber: account,
      balance: isChecked ? 1000 : 0,
      logged: false,
    };

    const initialBalance = {
      id: uuidv4(),
      date: getDateNow(),
      type: 'Abertura de conta',
      transferValue: isChecked ? 1000 : 0,
      description: isChecked
        ? 'Saldo adicionado ao abrir conta'
        : 'Cliente optou por não ter saldo ao abrir conta',
    };

    localStorage.setItem(email, JSON.stringify(user));
    localStorage.setItem(
      `transaction:${email}`,
      JSON.stringify([initialBalance]),
    );
    onCallModal('ok', `A conta ${account} foi criada com sucesso`);
    onBack();
  };

  const generateAccountNumber = () => {
    const account = Math.floor(Math.random() * 1000);
    const digit = Math.floor(Math.random() * 10);

    return `${account}-${digit}`;
  };

  const handleChecked = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <ContainerFormRegister
      onSubmit={handleSubmit(handleRegister)}
      autoComplete="nope"
    >
      <ContainerBackButton>
        <HiOutlineArrowNarrowLeft size={26} style={{ color: '#A422E3' }} />
        <BackText id="btnBackButton" onClick={onBack} href="#">
          Voltar ao login
        </BackText>
      </ContainerBackButton>

      <FieldInput
        label="E-mail"
        type="email"
        name="email"
        visible={!!errors.email}
        messageError={errors.email?.message}
        register={register}
        placeholder="Informe seu e-mail"
      />
      <FieldInput
        label="Nome"
        type="name"
        name="name"
        visible={!!errors.name}
        messageError={errors.name?.message}
        register={register}
        placeholder="Informe seu Nome"
      />
      <div className="login__password">
        <FieldInput
          label="Senha"
          type={typeInputPassword}
          name="password"
          visible={!!errors.password}
          messageError={errors.password?.message}
          register={register}
          placeholder="Informe sua senha"
        />
        <button
          className="login__eye"
          type="button"
          onClick={() =>
            setTypeInputPassword(
              typeInputPassword === 'password' ? 'text' : 'password',
            )
          }
        >
          <Image
            src={
              typeInputPassword === 'password'
                ? CustomIcons.CloseEye.src
                : CustomIcons.OpenEye.src
            }
            alt={
              typeInputPassword === 'password'
                ? CustomIcons.CloseEye.alt
                : CustomIcons.OpenEye.alt
            }
            width="26"
            height="26"
          />
        </button>
      </div>
      <div className="login__password">
        <FieldInput
          label="Confirmação senha"
          type={typeInputPasswordConfirmation}
          name="passwordConfirmation"
          visible={!!errors.passwordConfirmation}
          messageError={errors.passwordConfirmation?.message}
          register={register}
          placeholder="Informe a confirmação da senha"
        />
        <button
          className="login__eye"
          type="button"
          onClick={() =>
            setTypeInputPasswordConfirmation(
              typeInputPasswordConfirmation === 'password'
                ? 'text'
                : 'password',
            )
          }
        >
          <Image
            src={
              typeInputPasswordConfirmation === 'password'
                ? CustomIcons.CloseEye.src
                : CustomIcons.OpenEye.src
            }
            alt={
              typeInputPasswordConfirmation === 'password'
                ? CustomIcons.CloseEye.alt
                : CustomIcons.OpenEye.alt
            }
            width="26"
            height="26"
          />
        </button>
      </div>

      <ContainerToggle>
        <ToggleText>Criar conta com saldo ?</ToggleText>
        <ToggleSwitch
          id="toggleAddBalance"
          isChecked={isChecked}
          onClick={handleChecked}
        />
      </ContainerToggle>

      <Button
        id="btnRegister"
        label="Cadastrar"
        type="submit"
        appearance="purple"
      />
    </ContainerFormRegister>
  );
};
