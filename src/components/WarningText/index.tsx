import { ReactNode } from 'react';
import { WarnigWrapper } from './styles';

export type WarningTextProps = {
  color?: 'white' | 'primary';
  children: ReactNode;
};

export const WarningText = ({ color, children }: WarningTextProps) => {
  return <WarnigWrapper color={color}>{children}</WarnigWrapper>;
};
