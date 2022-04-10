import styled, { css } from 'styled-components';

interface IAccordionHeader {
  isOpened: boolean;
}

export const Container = styled.div`
  width: 100%;
  padding: 0 8rem;

  margin-bottom: 1.6rem;
`;

export const AccordionHeader = styled.div<IAccordionHeader>`
  ${({ theme }) => css`
    display: flex;
    height: 6rem;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.6rem;
    cursor: pointer;
    position: relative;

    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
  `}

  ${(props) =>
    props.isOpened &&
    css`
      border-bottom: none;
    `}
`;

export const AccordionBody = styled.div`
  ${({ theme }) => css`
    padding: 1.6rem;
    line-height: 2.4rem;
    white-space: pre-wrap;
    color: ${theme.colors.white};

    border-left: 1px solid ${theme.colors.white};
    border-right: 1px solid ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.white};
  `}
`;
