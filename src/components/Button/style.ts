import styled, { css} from 'styled-components'

interface IContainerButton {
  appearance: 'pink' | 'white' | 'purple'
}

const AppearancePink = ({ theme }) => css`
  color: ${theme.colors.white};
  background: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
`;

const AppearanceWhite = ({ theme }) => css`
  color: ${theme.colors.secondary};
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.secondary};
`;

const AppearancePurple = ({ theme }) => css`
  background: ${theme.colors.secondary};
  color: ${theme.colors.white};
`;

export const ContainerButton = styled.button<IContainerButton>`
  ${({ theme }) => css`
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
    width: 100%;
    padding: 1.6rem 0;
    border-radius: 0.8rem;
    cursor: pointer;
    outline: none;
    font-size: 1.6rem;
    font-family: ${theme.font.family.default};
  `}

    ${(props) => props.appearance === "pink" && AppearancePink};
    ${(props) => props.appearance === "white" && AppearanceWhite};
    ${(props) => props.appearance === "purple" && AppearancePurple};

    :hover {
      opacity: 0.8;
    }
`;
