import {
  LinkText
} from './styles'

function Link({ id, href, children }) {
  return <LinkText id={id} href={href}>{children}</LinkText>
}

export default Link;
