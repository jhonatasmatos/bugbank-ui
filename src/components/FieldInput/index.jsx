//STYLE
import { ContainerFieldInput } from "./style"

export function FieldInput({
  label,
  name,
  visible,
  type,
  placeholder,
  messageError,
  register,
  ...rest
}) {
  return (
    <ContainerFieldInput visible={visible} className="input__child">
      <label htmlFor={name} className="input__label">{label}</label>
      <input
        type={type || "text"}
        className="input__default"
        placeholder={placeholder}
        {...register(name)}
        {...rest}
      />
      <p className="input__warging">{messageError}</p>
    </ContainerFieldInput>
  );
}
