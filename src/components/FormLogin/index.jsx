import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import cookie from 'js-cookie'
import { useRouter } from 'next/router';
import { useAuth } from '../../providers/auth'

//COMPONENTS
import {
  FieldInput,
  Button
} from "../index";
import LinkText from "../LinkText"


//STYLE
import  { ContainerFormLogin  } from "./style"

// UTILS
import { YupMessage } from "../../utils/yupMessagens";

// VALIDATION
const schema = yup.object({
  email: yup.string().email(YupMessage.invalidformat).required(YupMessage.requiredField),
  password: yup.string().required(YupMessage.requiredField)
});

export function FormLogin({ onRegister, onCallModal }) {
  const router = useRouter()
  const { setUser } = useAuth()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema)
  });


  const setSession = (session, user) => {
    if (session) {
      cookie.set('bugbank-auth', session, {
        expires: 1,
        path: '/'
      });

      user.logged = true
      setUser(user)
      localStorage.setItem(user.email, JSON.stringify(user))

      router.push({
        pathname: '/home'
      })
    } else {
      cookie.remove('bugbank-auth');
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


  function handleLogin(data) {
    const responseStorage = localStorage.getItem(data.email);
    const loggedUser = JSON.parse(responseStorage)
    if (!loggedUser) {
      onCallModal("Usuário ou senha inválido.\nTente novamente ou verifique suas informações!")
      return
    }

    const users = allStorage()
    console.log(users)

      users.map((user) => {
        const u = JSON.parse(user)

        if (u.email !== loggedUser.email) {
          u.logged = false
          localStorage.setItem(u.email, JSON.stringify(u))
        }
      })

      if (loggedUser && data.password === loggedUser.password) {
        setSession(true, loggedUser)
      } else {
        onCallModal("Usuário ou senha inválido.\nTente novamente ou verifique suas informações!")
        setSession(false)
      }
  }


  return(
    <ContainerFormLogin
      onSubmit={handleSubmit(handleLogin)}
      autoComplete="nope"
    >
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
        label="Senha"
        type="password"
        name="password"
        visible={!!errors.password}
        messageError={errors.password?.message}
        register={register}
        placeholder="Informe sua senha"

      />
      <div className="login__buttons">
        <Button
          label="Acessar"
          type="submit"
          appearance="pink"
        />
        <Button
          label="Registrar"
          onClick={() => {onRegister(); reset() }}
          appearance="white"
        />
      </div>
      <div className="login__link">
        <LinkText
          href='/requirements'>
          Conheça nossos requisitos
        </LinkText>
      </div>
    </ContainerFormLogin>
  )
}


FormLogin.propTypes = {
  onRegister: PropTypes.func.isRequired,
  onCallModal: PropTypes.func.isRequired,
}
