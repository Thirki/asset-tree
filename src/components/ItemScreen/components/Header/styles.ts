import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 600;
  color: ${(props) => props.theme.colors.blue950};

  display: flex;
  align-items: center;

  padding: ${(props) => props.theme.space.md};
  border-bottom: ${({ theme }) =>
    `${theme.border.thin} ${theme.colors.gray200}`};

  svg {
    margin-left: ${(props) => props.theme.space.xs};
  }
`;
