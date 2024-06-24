import styled from "styled-components";

export const Wrapper = styled.div<{ $parentlevel: number }>`
  padding-left: ${(props) => `${props.$parentlevel * 16}px`};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space.xxs};
`;

export const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.blue950};
`;
