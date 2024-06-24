import React, { useCallback, useEffect, useMemo, useState } from "react";
import { CompanyContext } from "./CompanyContext";
import {
  IAsset,
  ICompany,
  ILocation,
  useGetCompanies,
  useGetCompaniesAssets,
  useGetCompaniesLocations,
} from "../api/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { ITreeComponents } from "../hooks";

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
  const [enableCompaniesQuery, setEnableCompaniesQuery] = useState(false);
  const [treeComponents, setTreeComponents] = useState<ITreeComponents[]>([]);

  const navigate = useNavigate();
  const { id } = useParams();

  const { data: companiesData, isFetching: isFetchingCompanies } =
    useGetCompanies();

  const { data: companiesAssetsData, isFetching: isFetchingAssets } =
    useGetCompaniesAssets(selectedCompany?.id, enableCompaniesQuery);

  const { data: companiesLocationsData, isFetching: isFetchingLocations } =
    useGetCompaniesLocations(selectedCompany?.id, enableCompaniesQuery);

  const changeRouteParams = useCallback(
    (company: ICompany) => {
      setSelectedComponent(undefined);
      navigate(`/company/${company.id}`);
    },
    [navigate]
  );

  useEffect(() => {
    if (selectedCompany) changeRouteParams(selectedCompany);
  }, [changeRouteParams, selectedCompany]);

  useEffect(() => {
    setIsLoading(
      isFetchingCompanies || isFetchingLocations || isFetchingAssets
    );
  }, [isFetchingAssets, isFetchingCompanies, isFetchingLocations]);

  useEffect(() => {
    if (companiesData?.length) {
      setCompanies(companiesData);
    }
  }, [companiesData]);

  useEffect(() => {
    if (!id && companies.length) {
      setSelectedCompany(companies[0]);
    }
  }, [companies, id]);

  useEffect(() => {
    if (selectedCompany?.id) {
      setEnableCompaniesQuery(true);
    }
  }, [selectedCompany?.id]);

  useEffect(() => {
    if (companiesLocationsData?.length && companiesAssetsData?.length) {
      setLocations(companiesLocationsData);
      setAssets(companiesAssetsData);
    }
  }, [companiesAssetsData, companiesLocationsData]);

  const value = useMemo(
    () => ({
      selectedCompany,
      companies,
      locations,
      assets,
      filters,
      selectedComponent,
      isLoading,
      treeComponents,
      setSelectedCompany,
      setCompanies,
      setLocations,
      setAssets,
      setFilters,
      setSelectedComponent,
      setIsLoading,
      setTreeComponents,
    }),
    [
      assets,
      companies,
      filters,
      isLoading,
      locations,
      selectedCompany,
      selectedComponent,
      treeComponents,
    ]
  );

  return (
    <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
  );
};
