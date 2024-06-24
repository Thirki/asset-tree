import { createContext } from "react";
import { IAsset, ICompany, ILocation } from "../api/hooks";
import { IFilters } from "./CompanyContextProvider";
import { ITreeComponents } from "../hooks";

interface ICompanyContextType {
  selectedCompany?: ICompany;
  companies: ICompany[];
  locations: ILocation[];
  assets: IAsset[];
  filters?: IFilters[];
  selectedComponent?: IAsset;
  isLoading?: boolean;
  treeComponents?: ITreeComponents[];
  setSelectedCompany: (company: ICompany) => void;
  setCompanies: (companies: ICompany[]) => void;
  setLocations: (locations: ILocation[]) => void;
  setAssets: (assets: IAsset[]) => void;
  setFilters: (
    filters: IFilters[] | ((prevFilters: IFilters[]) => IFilters[])
  ) => void;
  setSelectedComponent: (assets?: IAsset) => void;
  setIsLoading: (isLoading: boolean) => void;
  setTreeComponents: (treeComponents: ITreeComponents[]) => void;
}

export const CompanyContext = createContext<ICompanyContextType>({
  companies: [],
  locations: [],
  assets: [],
  filters: [],
  isLoading: false,
  treeComponents: [],
  setSelectedCompany: () => {},
  setCompanies: () => {},
  setLocations: () => {},
  setAssets: () => {},
  setFilters: () => {},
  setSelectedComponent: () => {},
  setIsLoading: () => {},
  setTreeComponents: () => {},
});
