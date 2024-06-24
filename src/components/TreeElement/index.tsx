import { useCallback, useMemo, useState } from "react";
import { useCompanyContext } from "../../context/hooks";
import { ITreeComponents, TBranchType } from "../../hooks";
import { ArrowIcon, AssetIcon, ComponentIcon, LocationIcon } from "../../icons";
import { Wrapper, Text, ExpandButton, IconWrapper } from "./styles";
import { StatusIcon } from "../StatusIcon";

interface ITreeElementProps {
  element: ITreeComponents;
  parentLevel?: number;
}

const renderIcon = (type: TBranchType, isSelected: boolean) => {
  const icons = {
    location: <LocationIcon />,
    asset: <AssetIcon />,
    component: <ComponentIcon whiteComponent={isSelected} />,
  };
  return icons[type];
};

export const TreeElement = ({
  element,
  parentLevel = 0,
}: ITreeElementProps) => {
  const { treeComponents, setSelectedComponent, selectedComponent } =
    useCompanyContext();
  const [isOpened, setIsOpened] = useState(false);

  const filteredComponents = useMemo(() => {
    return treeComponents?.filter(
      (branch) =>
        branch.locationId === element.id || branch.parentId === element.id
    );
  }, [treeComponents, element.id]);

  const handleSelectElement = () => {
    if (element.branchType === "component") {
      setSelectedComponent(element);
    }
  };

  const handleClickExpand = useCallback(() => {
    setIsOpened((prevState) => !prevState);
  }, []);

  return (
    <>
      <Wrapper
        $parentlevel={parentLevel}
        $elementtype={element.branchType}
        $isselected={selectedComponent?.id === element.id}
        onClick={handleSelectElement}
      >
        {element.children.length > 0 && (
          <ExpandButton onClick={handleClickExpand} $isopened={isOpened}>
            {element.children.length > 0 && <ArrowIcon />}
          </ExpandButton>
        )}
        <IconWrapper>
          {renderIcon(element.branchType, selectedComponent?.id === element.id)}
        </IconWrapper>
        <Text>{element.name.toUpperCase()}</Text>
        {element.branchType === "component" && (
          <StatusIcon selectedComponent={element} />
        )}
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
