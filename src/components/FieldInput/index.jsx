import PropTypes from 'prop-types';

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
  // ...rest
}) {
  return (
    <ContainerFieldInput visible={visible} className="input__child">
      <label htmlFor={name} className="input__label">{label}</label>
      <input
        type={type || "text"}
        className="input__default"
        placeholder={placeholder}
        {...register(name)}
        // {...rest}
        autoComplete="off"
      />
      <p className="input__warging">{messageError}</p>
    </ContainerFieldInput>
  );
}


FieldInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  type: PropTypes.oneOf(["text", "password", "email"]),
  placeholder: PropTypes.string,
  messageError: PropTypes.string,
  register: PropTypes.any.isRequired,
}

FieldInput.defaultProps = {
  visible: false,
  type: "text",
  placeholder: "",
  messageError: "",
}
