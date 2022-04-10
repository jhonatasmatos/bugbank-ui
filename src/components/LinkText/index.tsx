import { ReactNode } from 'react';
import { Link } from './styles';

export type LinkProps = {
  id?: string;
  href?: string;
  children: ReactNode;
  onClick?: () => void;
};

export const LinkText = ({ id, href, children, onClick }: LinkProps) => {
  return (
    <Link id={id} href={href} onClick={onClick}>
      {children}
    </Link>
  );
};
