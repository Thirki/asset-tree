import { useCompanyContext } from "../../../../context/hooks";
import { StatusCircleIcon } from "../../../../icons";
import { LoadingSkeleton } from "../../../LoadingSkeleton";
import { StatusIcon } from "../../../StatusIcon";
import { Title } from "./styles";
import { useTheme } from "styled-components";

export const Header = () => {
  const { colors } = useTheme();
  const { selectedComponent, isLoading } = useCompanyContext();

  return (
    <header>
      {!isLoading ? (
        <Title>
          {selectedComponent?.name || "Sem informação"}
          <StatusIcon selectedComponent={selectedComponent} />
        </Title>
      ) : (
        <Title>
          <LoadingSkeleton height="20px" width="99px" $color={colors.gray150} />
          <StatusCircleIcon />
        </Title>
      )}
    </header>
  );
};
