import styled from "styled-components";

export const Container = styled.section`
  flex-grow: 63;

  border: ${({ theme }) => `${theme.border.thin} ${theme.colors.gray200}`};
  border-radius: ${(props) => props.theme.borderRadius.xs};
`;
