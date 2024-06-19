import { createContext } from "react";
import { IAsset, ICompany, ILocation } from "../api/hooks";

interface ICompanyContextType {
  selectedCompany?: ICompany;
  companies: ICompany[];
  locations: ILocation[];
  assets: IAsset[];
  setSelectedCompany: (companies: ICompany) => void;
  setCompanies: (companies: ICompany[]) => void;
  setLocations: (locations: ILocation[]) => void;
  setAssets: (assets: IAsset[]) => void;
}

export const CompanyContext = createContext<ICompanyContextType>({
  companies: [],
  locations: [],
  assets: [],
  setSelectedCompany: () => {},
  setCompanies: () => {},
  setLocations: () => {},
  setAssets: () => {},
});
