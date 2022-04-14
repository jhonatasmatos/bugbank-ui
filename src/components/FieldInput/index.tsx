//STYLE
import { ContainerFieldInput } from './style';

export type FieldInputProps = {
  label: string;
  name: string;
  visible: boolean;
  type: string;
  placeholder: string;
  messageError: string;
  register: (arg: string) => void;
};

export const FieldInput = ({
  label,
  name,
  visible = false,
  type = 'text',
  placeholder,
  messageError,
  register,
}: FieldInputProps) => {
  return (
    <ContainerFieldInput visible={visible} className="input__child">
      <label htmlFor={name} className="input__label">
        {label}
      </label>
      <input
        type={type || 'text'}
        className="input__default"
        placeholder={placeholder}
        {...register(name)}
        autoComplete="off"
      />
      <p className="input__warging">{messageError}</p>
    </ContainerFieldInput>
  );
};
