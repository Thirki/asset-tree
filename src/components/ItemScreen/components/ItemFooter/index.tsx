import { useTheme } from "styled-components";
import { useCompanyContext } from "../../../../context/hooks";
import { LoadingSkeleton } from "../../../LoadingSkeleton";
import { Footer, Text, Title, UnitWrapper } from "./styles";
import { GatewayIcon, SensorIcon } from "../../../../icons";

export const ItemFooter = () => {
  const { isLoading, selectedComponent } = useCompanyContext();
  const { colors } = useTheme();
  return (
    <Footer>
      {!isLoading ? (
        <>
          <UnitWrapper>
            <Title>Sensor</Title>
            <Text>
              <SensorIcon />
              {selectedComponent?.sensorId || "Sem informação"}
            </Text>
          </UnitWrapper>
          <UnitWrapper>
            <Title>Receptor</Title>
            <Text>
              <GatewayIcon />
              {selectedComponent?.gatewayId || "Sem informação"}
            </Text>
          </UnitWrapper>
        </>
      ) : (
        <>
          <LoadingSkeleton height="100px" width="50%" $color={colors.gray150} />
          <LoadingSkeleton height="100px" width="80%" $color={colors.gray150} />
        </>
      )}
    </Footer>
  );
};
