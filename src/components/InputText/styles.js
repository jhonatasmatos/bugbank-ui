import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 1rem;

  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 0.4rem;

  margin-top: 0.4rem;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
`

export const Label = styled.label`
  font-size: 1.8rem;
  font-family: ${(props) => props.theme.font.family.default};
  color: ${(props) => props.theme.colors.primary};
`

