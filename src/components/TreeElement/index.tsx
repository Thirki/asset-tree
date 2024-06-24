import { useCallback, useMemo, useState } from "react";
import { useCompanyContext } from "../../context/hooks";
import { ITreeComponents, TBranchType } from "../../hooks";
import { ArrowIcon, AssetIcon, ComponentIcon, LocationIcon } from "../../icons";
import { Wrapper, Text, ExpandButton } from "./styles";

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
  const [isOpened, setIsOpened] = useState(false);

  const filteredComponents = useMemo(() => {
    return treeComponents?.filter(
      (branch) =>
        branch.locationId === element.id || branch.parentId === element.id
    );
  }, [treeComponents, element.id]);

  const handleClickExpand = useCallback(() => {
    setIsOpened((prevState) => !prevState);
  }, []);

  return (
    <>
      <Wrapper $parentlevel={parentLevel}>
        {element.children.length > 0 && (
          <ExpandButton onClick={handleClickExpand} $isopened={isOpened}>
            {element.children.length > 0 && <ArrowIcon />}
          </ExpandButton>
        )}
        {renderIcon(element.branchType)}
        <Text>{element.name.toUpperCase()}</Text>
      </Wrapper>
      {isOpened &&
        filteredComponents?.map((component) => (
          <TreeElement
            element={component}
            key={component.id}
            parentLevel={parentLevel + 1}
          />
        ))}
    </>
  );
};
