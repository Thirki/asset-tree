import React from "react";
import { Skeleton } from "./styles";

export interface ILoadingSkeletonProps {
  width: string;
  height: string;
  $color: string;
}

export const LoadingSkeleton: React.FC<ILoadingSkeletonProps> = ({
  $color,
  height,
  width,
}) => {
  return <Skeleton $color={$color} height={height} width={width} />;
};
