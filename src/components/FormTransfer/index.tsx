import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';

import { ContainerFormTransfer } from './styles';

import { FieldInput, Button } from '../../components';

// UTILS
// import { YupMessage } from '../../utils/yupMessagens';
// import { CustomIcons } from '../../assets/icons';

// VALIDATION
const schema = yup.object({
  accountNumber: yup.string(),
  digit: yup.string(),
  transferValue: yup.number(),
  description: yup.string(),
});

import getDateNow from '../../utils/date';

export type FormTransferProps = {
  onCallModal: (type: string, message: string) => void;
  setRedirect: (arg: boolean) => void;
};

interface UserProps {
  name: string;
  email: string;
  password: string;
  accountNumber: string;
  balance: number;
  logged: boolean;
}

export const FormTransfer = ({
  setRedirect,
  onCallModal,
}: FormTransferProps) => {
  const [loggedUser, setLoggedUser] = useState<UserProps>({
    name: '',
    email: '',
    password: '',
    accountNumber: '',
    balance: 0,
    logged: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
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

  const handleTransfer = (data) => {
    const { accountNumber, digit, transferValue, description } = data;

    const items = allStorage();

    if (transferValue < 0 || transferValue === 0) {
      onCallModal('error', 'Valor da transferência não pode ser 0 ou negativo');

      return;
    }

    let account;
    items.map((item) => {
      if (item.includes(`${accountNumber}-${digit}`)) {
        account = JSON.parse(item);
      }
    });

    if (!account) {
      onCallModal('error', 'Conta inválida ou inexistente');

      return;
    }

    if (account.email === loggedUser.email) {
      onCallModal('error', 'Nao pode transferir pra mesmo conta');
      setRedirect(true);
      return;
    }

    const myAccount = localStorage.getItem(loggedUser.email);
    const myAccountFormatted = JSON.parse(myAccount);

    if (myAccountFormatted.balance < transferValue) {
      onCallModal('error', 'Você não tem saldo suficiente para essa transação');

      return;
    }

    myAccountFormatted.balance = myAccountFormatted.balance - transferValue;
    localStorage.setItem(
      myAccountFormatted.email,
      JSON.stringify(myAccountFormatted),
    );

    account.balance = account.balance + transferValue;
    localStorage.setItem(account.email, JSON.stringify(account));

    const trxWithdrawal = {
      id: uuidv4(),
      date: getDateNow(),
      type: 'withdrawal',
      transferValue: -transferValue,
      description,
    };

    const trxInput = {
      id: uuidv4(),
      date: getDateNow(),
      type: 'input',
      transferValue: transferValue,
      description,
    };

    const storageTrxWithdrawal = localStorage.getItem(
      `transaction:${loggedUser.email}`,
    );

    if (!storageTrxWithdrawal) {
      localStorage.setItem(
        `transaction:${loggedUser.email}`,
        JSON.stringify([trxWithdrawal]),
      );
    } else {
      const storage = localStorage.getItem(`transaction:${loggedUser.email}`);
      const storageParsed = JSON.parse(storage);
      const newStorage = [...storageParsed, trxWithdrawal];

      localStorage.setItem(
        `transaction:${loggedUser.email}`,
        JSON.stringify(newStorage),
      );
    }

    const storageTrxInput = localStorage.getItem(
      `transaction:${account.email}`,
    );

    if (!storageTrxInput) {
      localStorage.setItem(
        `transaction:${account.email}`,
        JSON.stringify([trxInput]),
      );
    } else {
      const storageInput = localStorage.getItem(`transaction:${account.email}`);
      const storageInputParsed = JSON.parse(storageInput);
      const newStorageInput = [...storageInputParsed, trxInput];

      localStorage.setItem(
        `transaction:${account.email}`,
        JSON.stringify(newStorageInput),
      );
    }

    if (storageTrxWithdrawal) {
      onCallModal('ok', 'Transferencia realizada com sucesso');
    }
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

  return (
    <ContainerFormTransfer
      onSubmit={handleSubmit(handleTransfer)}
      autoComplete="nope"
    >
      <div className="account__data">
        <FieldInput
          label="Número da conta"
          type="accountNumber"
          name="accountNumber"
          visible={!!errors.accountNumber}
          messageError={errors.accountNumber?.message}
          register={register}
          placeholder="Informe o número da conta"
        />
        <FieldInput
          label="Dígito"
          type="digit"
          name="digit"
          visible={!!errors.digit}
          messageError={errors.digit?.message}
          register={register}
          placeholder="Informe o dígito da conta"
        />
      </div>
      <FieldInput
        label="Valor da transferência"
        type="transferValue"
        name="transferValue"
        visible={!!errors.transferValue}
        messageError={errors.transferValue?.message}
        register={register}
        placeholder="Informe o valor da transferência"
      />
      <FieldInput
        label="Descrição"
        type="description"
        name="description"
        visible={!!errors.description}
        messageError={errors.description?.message}
        register={register}
        placeholder="Informe uma descrição"
      />

      <Button
        id="btnTransferNow"
        label="Transferir agora"
        type="submit"
        appearance="purple"
      />
    </ContainerFormTransfer>
  );
};
