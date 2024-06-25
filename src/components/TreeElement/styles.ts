import styled, { css } from "styled-components";
import { TBranchType } from "../../api/hooks";

interface IWrapperProps {
  $parentlevel: number;
  $elementtype: TBranchType;
  $isselected: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  margin-left: ${(props) => `${props.$parentlevel * 16}px`};
  margin-bottom: ${(props) => props.theme.space.xxs};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space.xs};
  cursor: ${(props) =>
    props.$elementtype === "component" ? "pointer" : "normal"};
  color: ${(props) => props.theme.colors.blue950};

  ${(props) => {
    if (!props.$isselected) return;
    return css`
      background-color: ${props.theme.colors.blue500};
      color: ${(props) => props.theme.colors.white};
    `;
  }}
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-left: ${(props) => props.theme.space.xxs};
`;

export const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const ExpandButton = styled.button<{ $isopened: boolean }>`
  rotate: ${(props) => `${props.$isopened ? "0" : "-90"}deg`};
  background-color: transparent;
  border: 0;
  cursor: pointer;

  transition: 0.2s;
`;
