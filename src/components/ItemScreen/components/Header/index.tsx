import { useCompanyContext } from "../../../../context/hooks";
import { EnergyStatusIcon, StatusCircleIcon } from "../../../../icons";
import { LoadingSkeleton } from "../../../LoadingSkeleton";
import { Title } from "./styles";
import { useTheme } from "styled-components";

type IconMapping = {
  [key: string]: JSX.Element;
};

export const Header = () => {
  const { colors } = useTheme();
  const { selectedComponent, isLoading } = useCompanyContext();

  const renderIcon = () => {
    const status = selectedComponent?.status === "alert" ? "danger" : "success";
    const sensorType = selectedComponent?.sensorType || "default";

    const iconMapping: IconMapping = {
      energy: <EnergyStatusIcon iconStatus={status} />,
      vibration: <StatusCircleIcon iconStatus={status} />,
      default: <StatusCircleIcon iconStatus="loading" />,
    };

    return iconMapping[sensorType] || iconMapping.default;
  };

  return (
    <header>
      {!isLoading ? (
        <Title>
          {selectedComponent?.name || "Sem informação"}
          {renderIcon()}
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
