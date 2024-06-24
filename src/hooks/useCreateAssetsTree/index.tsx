import { useMemo } from "react";
import { IAsset, ILocation } from "../../api/hooks";

export type TBranchType = "location" | "asset" | "component";

export interface ITreeComponents extends IAsset {
  branchType: TBranchType;
  isOpened?: boolean;
  children: Array<ILocation | IAsset>;
}

export const useCreateAssetsTree = ({
  locations,
  assets,
}: {
  locations: ILocation[] | undefined;
  assets: IAsset[] | undefined;
}) => {
  const getMappedTree = useMemo(() => {
    if (!locations?.length || !assets?.length) return [];
    const formattedTree: Record<string, ITreeComponents> = {};

    for (const location of locations) {
      formattedTree[location.id] = {
        ...location,
        children: [],
        branchType: "location",
      };
    }

    for (const asset of assets) {
      formattedTree[asset.id] = {
        ...asset,
        children: [],
        branchType: asset.sensorType ? "component" : "asset",
      };
    }

    for (const unitId in formattedTree) {
      const currentUnit = formattedTree[unitId];
      const parentId = currentUnit?.parentId || currentUnit?.locationId || "";

      if (parentId) {
        const currentParent = formattedTree[parentId];
        if (currentParent) {
          currentParent.children?.push(currentUnit);
        }
      }
    }

    return formattedTree;
  }, [locations, assets]);

  return getMappedTree;
};
