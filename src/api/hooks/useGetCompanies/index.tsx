import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axiosConfig";

export interface ICompany {
  id: string;
  name: string;
}

export const USE_GET_COMPANIES_KEY = "useGetCompanies";

const fetchCompanies = async (): Promise<ICompany[]> => {
  const response = await axiosInstance.get("/companies");
  return response.data;
};

export const useGetCompanies = () => {
  return useQuery<ICompany[]>({
    queryKey: [USE_GET_COMPANIES_KEY],
    queryFn: fetchCompanies,
  });
};
