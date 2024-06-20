import { useTheme } from "styled-components";
import { useCompanyContext } from "../../../../context/hooks";
import { LoadingSkeleton } from "../../../LoadingSkeleton";
import { UploadFile } from "../UploadFile";
import {
  Wrapper,
  EquipmentWrapper,
  About,
  Title,
  Text,
  PictureWrapper,
  DepartmentIcon,
} from "./styles";
import { useCallback } from "react";

type ISensorMapping = {
  [key: string]: string;
};

export const ItemContent = () => {
  const { isLoading, selectedComponent } = useCompanyContext();
  const { colors } = useTheme();

  const getMotorName = useCallback((name: string) => {
    const motorName: ISensorMapping = {
      energy: "Motor Elétrico (Trifásico)",
      vibration: "Motor a Combustão (Motor de Explosão)",
    };
    return motorName[name] || name;
  }, []);

  const getDepartmentName = useCallback((name: string) => {
    const departmentName: ISensorMapping = {
      energy: "Elétrica",
      vibration: "Mecânica",
    };
    return departmentName[name] || name;
  }, []);

  return (
    <Wrapper>
      <UploadFile />
      {!isLoading ? (
        <About>
          <EquipmentWrapper>
            <Title>Tipo de Equipamento</Title>
            <Text>
              {getMotorName(selectedComponent?.sensorType || "Sem informação")}
            </Text>
          </EquipmentWrapper>
          <div>
            <Title>Responsáveis</Title>
            <PictureWrapper>
              <DepartmentIcon>M</DepartmentIcon>
              <Text>
                {getDepartmentName(
                  selectedComponent?.sensorType || "Sem informação"
                )}
              </Text>
            </PictureWrapper>
          </div>
        </About>
      ) : (
        <LoadingSkeleton height="200px" width="100%" $color={colors.gray150} />
      )}
    </Wrapper>
  );
};
