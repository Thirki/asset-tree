import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.colors.blue950};
  padding: ${(props) => `${props.theme.space.sm} ${props.theme.space.md}`};
`;

export const MenuWrapper = styled.ul`
  list-style: none;
  display: flex;
  gap: ${(props) => props.theme.space.sm};
`;
