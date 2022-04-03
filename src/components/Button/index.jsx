import PropTypes from 'prop-types';

//STYLE
import { ContainerButton } from "./style"

export function Button({ label, type, disabled, onClick, appearance }) {
  return (
    <ContainerButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="button__child"
      appearance={appearance}
    >
    {label}
    </ContainerButton>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["submit", "button"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  appearance: PropTypes.oneOf(["pink", "white", "purple"]),
}

Button.defaultProps = {
  appearance: "pink",
  type: "button"
}
