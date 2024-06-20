import React from "react";
import { statusType, useSelectStatusColor } from "../../hooks";

interface IStatusCircleIconProps {
  size?: number;
  iconStatus?: statusType;
}

export const StatusCircleIcon: React.FC<IStatusCircleIconProps> = ({
  size = 8,
  iconStatus = "loading",
}) => {
  const color = useSelectStatusColor(iconStatus);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill={color} />
    </svg>
  );
};
