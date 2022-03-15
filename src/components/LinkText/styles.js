import styled from 'styled-components'

export const LinkText = styled.a`
font-size: 2rem;
color: ${(props) => props.theme.colors.secondary};
cursor: pointer;

&:hover {
  opacity: 0.8
}

@media(max-width: 460px){
  font-size: 1.6rem;
}
`
