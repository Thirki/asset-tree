import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axiosConfig";

export interface ILocation {
  id: string;
  name: string;
  parentId?: string;
}

export const getCompanyLocationsKey = (companyId: string) =>
  `useGetCompaniesLocations-${companyId}`;

export const useGetCompaniesLocations = (
  companyId: string,
  enabled = false
) => {
  const fetchCompaniesLocations = async (): Promise<ILocation[]> => {
    const response = await axiosInstance.get(
      `/companies/${companyId}/locations`
    );
    return response.data;
  };
  return useQuery<ILocation[]>({
    queryKey: [getCompanyLocationsKey(companyId)],
    queryFn: fetchCompaniesLocations,
    enabled,
  });
};
