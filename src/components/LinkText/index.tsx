import { ReactNode } from 'react';
import {
  Link
} from './styles'

export type LinkProps = {
  id?: string;
  href: string;
  children: ReactNode;
}

export const LinkText = ({ id, href, children }: LinkProps) => {
  return <Link id={id} href={href}>{children}</Link>
}
