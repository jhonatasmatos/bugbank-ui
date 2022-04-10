import styled from 'styled-components';

export const ContainerFormTransfer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 5rem;
  width: 50rem;
  border-radius: 2rem;

  background: ${(props) => props.theme.colors.white};

  .account__data {
    display: grid;
    grid-template-columns: auto 20%;
    gap: 0.8rem;
  }
`;

export const ContainerBackButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BackText = styled.a`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.primary};
  padding-left: 1rem;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 460px) {
    font-size: 1.6rem;
  }
`;
