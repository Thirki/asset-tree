import { useTheme } from "styled-components";
import { useCallback } from "react";

export type statusType = "success" | "danger" | "loading";

export const useSelectStatusColor = (status: statusType) => {
  const theme = useTheme();

  const selectedStatusColor = useCallback(
    (currentStatus: statusType) => {
      const colors = {
        success: theme.colors.success,
        danger: theme.colors.danger,
        loading: theme.colors.gray150,
      };
      return colors[currentStatus];
    },
    [theme.colors]
  );

  return selectedStatusColor(status);
};
