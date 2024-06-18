import styled, { keyframes } from "styled-components";
import { ILoadingSkeletonProps } from ".";

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const Skeleton = styled.div<ILoadingSkeletonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.$color};
  background-image: linear-gradient(
    to right,
    ${(props) => props.$color} 0%,
    ${(props) => props.$color} 20%,
    rgba(255, 255, 255, 0.2) 40%,
    ${(props) => props.$color} 100%
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite linear;
  border-radius: ${(props) => props.theme.borderRadius.sm};
`;
