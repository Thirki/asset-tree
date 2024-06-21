import logo from "../../assets/tractian.svg";

import { useTheme } from "styled-components";

import { MenuElement } from "../MenuElement";
import { HeaderWrapper, MenuWrapper } from "./styles";
import { LoadingSkeleton } from "../LoadingSkeleton";
import { useCompanyContext } from "../../context/hooks";

export const Header = () => {
  const { colors } = useTheme();
  const { companies, isLoading } = useCompanyContext();

  const renderSkeleton = () => {
    return (
      <>
        <LoadingSkeleton height="20px" width="90px" $color={colors.blue500} />
        <LoadingSkeleton height="20px" width="90px" $color={colors.blue900} />
        <LoadingSkeleton height="20px" width="90px" $color={colors.blue900} />
      </>
    );
  };

  if (isLoading) {
    return renderSkeleton();
  }

  return (
    <HeaderWrapper>
      <img src={logo} />
      <nav>
        <MenuWrapper>
          {companies?.map((company) => (
            <MenuElement company={company} key={company.id} />
          ))}
        </MenuWrapper>
      </nav>
    </HeaderWrapper>
  );
};
