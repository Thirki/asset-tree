import { useEffect, useState } from "react";
import { ITreeComponents, useCreateAssetsTree } from "../../hooks";
import { Container, LoadingWrapper, TreeWrapper } from "./styles";
import { useCompanyContext } from "../../context/hooks";
import { TreeElement } from "../TreeElement";
import { LoadingSkeleton } from "../LoadingSkeleton";
import { useTheme } from "styled-components";

export const TreeScreen = () => {
  const { colors } = useTheme();
  const { setTreeComponents, locations, assets, isLoading } =
    useCompanyContext();
  const [rootsElements, setRootElements] = useState<ITreeComponents[]>([]);
  const tree = useCreateAssetsTree({
    locations,
    assets,
  });

  useEffect(() => {
    const formattedTree = Object.values(tree) as ITreeComponents[];
    const filteredTree = formattedTree.filter(
      (branch) => !branch.parentId && !branch.locationId
    );
    setRootElements(filteredTree);
    setTreeComponents(formattedTree);
  }, [setTreeComponents, tree]);

  const renderTree = () => {
    return (
      <TreeWrapper>
        {rootsElements.map((element) => (
          <TreeElement key={element.id} element={element} />
        ))}
      </TreeWrapper>
    );
  };

  const renderLoading = () => {
    return (
      <LoadingWrapper>
        <LoadingSkeleton height="20px" width="50%" $color={colors.gray150} />
        <LoadingSkeleton height="20px" width="70%" $color={colors.gray200} />
        <LoadingSkeleton height="20px" width="30%" $color={colors.gray150} />
        <LoadingSkeleton height="20px" width="80%" $color={colors.gray200} />
        <LoadingSkeleton height="20px" width="20%" $color={colors.gray150} />
        <LoadingSkeleton height="20px" width="80%" $color={colors.gray200} />
      </LoadingWrapper>
    );
  };

  return <Container>{!isLoading ? renderTree() : renderLoading()}</Container>;
};
