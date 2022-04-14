import { Container, Input, Span } from './styles';

export type ToggleSwitchProps = {
  id: string;
  isChecked: boolean;
  onClick: () => void;
};

export const ToggleSwitch = ({ id, isChecked, onClick }: ToggleSwitchProps) => {
  return (
    <Container isChecked={isChecked}>
      <Input id={id} onClick={onClick} />
      <Span isChecked={isChecked} />
    </Container>
  );
};
