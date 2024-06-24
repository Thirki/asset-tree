import logo from "../../assets/tractian.svg";
import { useTheme } from "styled-components";
import { MenuElement } from "../MenuElement";
import { HeaderWrapper, MenuWrapper } from "./styles";
import { LoadingSkeleton } from "../LoadingSkeleton";
import { useCompanyContext } from "../../context/hooks";

export const Header = () => {
  const { colors } = useTheme();
  const { companies, isLoading } = useCompanyContext();

  const renderSkeleton = () => (
    <>
      <LoadingSkeleton height="20px" width="90px" $color={colors.blue500} />
      <LoadingSkeleton height="20px" width="90px" $color={colors.blue900} />
      <LoadingSkeleton height="20px" width="90px" $color={colors.blue900} />
    </>
  );

  const renderMenuElements = () =>
    companies?.map((company) => (
      <MenuElement company={company} key={company.id} />
    ));

  return (
    <HeaderWrapper>
      <img src={logo} alt="Tractian logo" />
      <nav>
        <MenuWrapper>
          {!isLoading || companies.length
            ? renderMenuElements()
            : renderSkeleton()}
        </MenuWrapper>
      </nav>
    </HeaderWrapper>
  );
};
