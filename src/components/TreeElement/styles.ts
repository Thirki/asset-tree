import styled from "styled-components";

export const Wrapper = styled.div<{ $parentlevel: number }>`
  padding-left: ${(props) => `${props.$parentlevel * 16}px`};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space.xs};
`;

export const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.blue950};
`;

export const ExpandButton = styled.button<{ $isopened: boolean }>`
  rotate: ${(props) => `${props.$isopened ? "0" : "-90"}deg`};
  background-color: transparent;
  border: 0;
  cursor: pointer;

  transition: 0.2s;
`;
