import { IAsset } from "../../api/hooks/useGetCompaniesAssets";
import { EnergyStatusIcon, StatusCircleIcon } from "../../icons";

type IconMapping = {
  [key: string]: JSX.Element;
};

export const StatusIcon = ({
  selectedComponent,
}: {
  selectedComponent?: IAsset;
}) => {
  const status = selectedComponent?.status === "alert" ? "danger" : "success";
  const sensorType = selectedComponent?.sensorType || "default";

  const iconMapping: IconMapping = {
    energy: <EnergyStatusIcon iconStatus={status} />,
    vibration: <StatusCircleIcon iconStatus={status} />,
    default: <StatusCircleIcon iconStatus="loading" />,
  };
  return iconMapping[sensorType] || iconMapping.default;
};
