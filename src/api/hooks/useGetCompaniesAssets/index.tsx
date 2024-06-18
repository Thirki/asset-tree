import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axiosConfig";

export interface IAsset {
  id: string;
  locationId: string | null;
  name: string;
  parentId: string | null;
  gatewayId?: string;
  sensorId?: string;
  sensorType?: string;
  status?: string;
}

export const getCompanyAssetsKey = (companyId: string) =>
  `useGetCompaniesAssets-${companyId}`;

export const useGetCompaniesAssets = (companyId: string, enabled = false) => {
  const fetchCompaniesAssets = async (): Promise<IAsset[]> => {
    const response = await axiosInstance.get(`/companies/${companyId}/assets`);
    return response.data;
  };
  return useQuery<IAsset[]>({
    queryKey: [getCompanyAssetsKey(companyId)],
    queryFn: fetchCompaniesAssets,
    enabled,
  });
};
