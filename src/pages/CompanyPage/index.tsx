import { ItemScreen, TreeScreen } from "../../components";
import { EnergyIcon, InformationIcon } from "../../icons";
import { useCallback } from "react";
import { useCompanyContext } from "../../context/hooks";

import {
  Main,
  Section,
  Title,
  Header,
  Button,
  ButtonContainer,
  ContentWrapper,
} from "./styles";
import { useTheme } from "styled-components";

export const CompanyPage = () => {
  const { filters, setFilters } = useCompanyContext();
  const theme = useTheme();

  const handleSelectEnergyFilter = useCallback(() => {
    if (filters?.includes("energy")) {
      setFilters((prevState) => {
        return prevState.filter((filter) => filter !== "energy");
      });
      return;
    }
    setFilters((prevState) => {
      const hasEnergyFilter = prevState.includes("energy");
      return hasEnergyFilter ? prevState : [...prevState, "energy"];
    });
  }, [filters, setFilters]);

  const handleSelectCriticalFilter = useCallback(() => {
    if (filters?.includes("critical")) {
      setFilters((prevState) => {
        return prevState.filter((filter) => filter !== "critical");
      });
      return;
    }
    setFilters((prevState) => {
      const hasCriticalFilter = prevState.includes("critical");
      return hasCriticalFilter ? prevState : [...prevState, "critical"];
    });
  }, [filters, setFilters]);

  return (
    <Section>
      <Main>
        <Header>
          <Title>
            Ativos<span> / Apex Unit</span>
          </Title>
          <ButtonContainer>
            <Button
              onClick={handleSelectEnergyFilter}
              $isselected={!!filters?.includes("energy")}
            >
              <EnergyIcon
                color={filters?.includes("energy") ? theme.colors.white : ""}
              />
              Sensor de Energia
            </Button>
            <Button
              onClick={handleSelectCriticalFilter}
              $isselected={!!filters?.includes("critical")}
            >
              <InformationIcon
                color={filters?.includes("critical") ? theme.colors.white : ""}
              />
              Crítico
            </Button>
          </ButtonContainer>
        </Header>
        <ContentWrapper>
          <TreeScreen />
          <ItemScreen />
        </ContentWrapper>
      </Main>
    </Section>
  );
};
