import React, { useCallback, useEffect, useMemo, useState } from "react";
import { CompanyContext } from "./CompanyContext";
import { IAsset, ICompany, ILocation } from "../api/hooks";
import { useNavigate } from "react-router-dom";

interface IMyContextProviderProps {
  children: React.ReactNode;
}

export type IFilters = "energy" | "critical";

export const CompanyContextProvider: React.FC<IMyContextProviderProps> = ({
  children,
}) => {
  const [selectedCompany, setSelectedCompany] = useState<ICompany>();
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [locations, setLocations] = useState<ILocation[]>([]);
  const [assets, setAssets] = useState<IAsset[]>([]);
  const [filters, setFilters] = useState<IFilters[]>([]);
  const [selectedComponent, setSelectedComponent] = useState<IAsset>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const changeRouteParams = useCallback(
    (company: ICompany) => {
      navigate(`/company/${company.id}`);
    },
    [navigate]
  );

  useEffect(() => {
    if (selectedCompany) changeRouteParams(selectedCompany);
  }, [changeRouteParams, selectedCompany]);

  const value = useMemo(
    () => ({
      selectedCompany,
      companies,
      locations,
      assets,
      filters,
      selectedComponent,
      isLoading,
      setSelectedCompany,
      setCompanies,
      setLocations,
      setAssets,
      setFilters,
      setSelectedComponent,
      setIsLoading,
    }),
    [
      assets,
      companies,
      filters,
      isLoading,
      locations,
      selectedCompany,
      selectedComponent,
    ]
  );

  return (
    <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
  );
};
