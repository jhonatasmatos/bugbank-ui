import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//COMPONENTS
import { FieldInput } from "../FieldInput";

//STYLE
import  { ContainerFormLogin  } from "./style"

// UTILS
import { YupMessage } from "../../utils/yupMessagens";


const schema = yup.object({
  email: yup.string().email(YupMessage.invalidformat).required(YupMessage.requiredField),
  password: yup.string().required(YupMessage.requiredField)
});


export function FormLogin() {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema)
  });

  function handleSave(data) {
    console.log(data)
  }


  return(
    <ContainerFormLogin onSubmit={handleSubmit(handleSave)}>
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
        placeholder="Informe seu e-mail"
      />
      <button type="submit" disabled={!isValid}>Submit</button>
    </ContainerFormLogin>
  )
}
