import { ContainerButton } from "./style"

export type ButtonProps = {
  label: string,
  type: "submit" | "button",
  disabled: boolean,
  onClick(): Function,
  appearance: 'pink' | 'white' | 'purple',
}

export const Button = ({
  label,
  type = 'button',
  disabled,
  onClick,
  appearance = 'pink'}: ButtonProps) => {
  return (
    <ContainerButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      className='button__child'
      appearance={appearance}
    >
    {label}
    </ContainerButton>
  );
}
