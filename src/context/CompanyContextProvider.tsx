import React, { useCallback, useEffect, useMemo, useState } from "react";
import { CompanyContext } from "./CompanyContext";
import { IAsset, ICompany, ILocation } from "../api/hooks";
import { useNavigate } from "react-router-dom";

interface IMyContextProviderProps {
  children: React.ReactNode;
}

export const CompanyContextProvider: React.FC<IMyContextProviderProps> = ({
  children,
}) => {
  const [selectedCompany, setSelectedCompany] = useState<ICompany>();
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [locations, setLocations] = useState<ILocation[]>([]);
  const [assets, setAssets] = useState<IAsset[]>([]);

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
      setSelectedCompany,
      setCompanies,
      setLocations,
      setAssets,
    }),
    [assets, companies, locations, selectedCompany]
  );

  return (
    <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
  );
};
