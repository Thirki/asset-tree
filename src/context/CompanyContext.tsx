import { createContext } from "react";
import { IAsset, ICompany, ILocation } from "../api/hooks";
import { IFilters } from "./CompanyContextProvider";

interface ICompanyContextType {
  selectedCompany?: ICompany;
  companies: ICompany[];
  locations: ILocation[];
  assets: IAsset[];
  filters?: IFilters[];
  selectedComponent?: IAsset;
  isLoading?: boolean;
  setSelectedCompany: (company: ICompany) => void;
  setCompanies: (companies: ICompany[]) => void;
  setLocations: (locations: ILocation[]) => void;
  setAssets: (assets: IAsset[]) => void;
  setFilters: (
    filters: IFilters[] | ((prevFilters: IFilters[]) => IFilters[])
  ) => void;
  setSelectedComponent: (assets: IAsset) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const CompanyContext = createContext<ICompanyContextType>({
  companies: [],
  locations: [],
  assets: [],
  filters: [],
  isLoading: false,
  setSelectedCompany: () => {},
  setCompanies: () => {},
  setLocations: () => {},
  setAssets: () => {},
  setFilters: () => {},
  setSelectedComponent: () => {},
  setIsLoading: () => {},
});
