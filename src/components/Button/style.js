import styled, { css} from 'styled-components'

const AppearancePink = css`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
`;

const AppearanceWhite = css`
  color: ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.secondary};
`;

const AppearancePurple = css`
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
`;

export const ContainerButton = styled.button`
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
  width: 100%;
  padding: 12px 0;
  border-radius: 0.8rem;
  cursor: pointer;
  outline: none;
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.font.family.default};
  ${(props) => props.appearance === "pink" && AppearancePink};
  ${(props) => props.appearance === "white" && AppearanceWhite};
  ${(props) => props.appearance === "purple" && AppearancePurple};
  :hover {
    opacity: 0.8;
  }
`;
