import { useEffect, useState } from "react";
import { ITreeComponents, useCreateAssetsTree } from "../../hooks";
import { Container, TreeWrapper } from "./styles";
import { useCompanyContext } from "../../context/hooks";
import { TreeElement } from "../TreeElement";

export const TreeScreen = () => {
  const { setTreeComponents, locations, assets } = useCompanyContext();
  const [rootsElements, setRootElements] = useState<ITreeComponents[]>([]);
  const formattedTree = useCreateAssetsTree({
    locations,
    assets,
  });

  useEffect(() => {
    setRootElements(
      Object.values(formattedTree).filter(
        (branch) => !branch.parentId && !branch.locationId
      )
    );
    setTreeComponents(Object.values(formattedTree));
  }, [formattedTree, setTreeComponents]);

  return (
    <Container>
      <TreeWrapper>
        {rootsElements.map((element) => (
          <TreeElement key={element.id} element={element} />
        ))}
      </TreeWrapper>
    </Container>
  );
};
