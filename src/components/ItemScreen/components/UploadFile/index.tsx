import { Wrapper, Text } from "./styles";
import { ImportIcon } from "../../../../icons";
import { useCompanyContext } from "../../../../context/hooks";
import motorEletrico from "../../../../assets/motorEletrico.png";
import motorMecanico from "../../../../assets/motorMecanico.png";

type pictureMapping = {
  [key: string]: string;
};

export const UploadFile = () => {
  const { selectedComponent, isLoading } = useCompanyContext();

  const selectMotorImage = (sensor: string) => {
    const iconMapping: pictureMapping = {
      energy: motorEletrico,
      vibration: motorMecanico,
    };
    return iconMapping[sensor];
  };

  return (
    <Wrapper>
      {!selectedComponent?.sensorType || isLoading ? (
        <div>
          <ImportIcon />
          <Text>Adicionar imagem do Ativo</Text>
        </div>
      ) : (
        <img
          src={selectMotorImage(selectedComponent?.sensorType || "")}
          alt={`Motor ${selectedComponent?.name}` || "Imagem do motor"}
        />
      )}
    </Wrapper>
  );
};
