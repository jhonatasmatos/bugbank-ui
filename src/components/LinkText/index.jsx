import {
  LinkText
} from './styles'

function Link({ href, children }) {
  return <LinkText href={href}>{children}</LinkText>
}

export default Link;
