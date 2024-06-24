import { useMemo } from "react";
import { useCompanyContext } from "../../context/hooks";
import { ITreeComponents, TBranchType } from "../../hooks";
import { ArrowIcon, AssetIcon, ComponentIcon, LocationIcon } from "../../icons";
import { Wrapper, Text } from "./styles";

interface ITreeElementProps {
  element: ITreeComponents;
  parentLevel?: number;
}

const renderIcon = (type: TBranchType) => {
  const icons = {
    location: <LocationIcon />,
    asset: <AssetIcon />,
    component: <ComponentIcon />,
  };
  return icons[type];
};

export const TreeElement = ({
  element,
  parentLevel = 0,
}: ITreeElementProps) => {
  const { treeComponents } = useCompanyContext();

  const filteredComponents = useMemo(() => {
    return treeComponents?.filter(
      (branch) =>
        branch.locationId === element.id || branch.parentId === element.id
    );
  }, [treeComponents, element.id]);

  return (
    <>
      <Wrapper $parentlevel={parentLevel}>
        {element.children.length ? <ArrowIcon /> : ""}
        {renderIcon(element.branchType)}
        <Text>{element.name.toUpperCase()}</Text>
      </Wrapper>
      {filteredComponents?.map((component) => (
        <TreeElement
          element={component}
          key={component.id}
          parentLevel={parentLevel + 1}
        />
      ))}
    </>
  );
};
