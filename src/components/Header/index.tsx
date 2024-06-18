import { useEffect } from "react";

import logo from "../../assets/tractian.svg";

import { useGetCompanies } from "../../api/hooks";
import { useTheme } from "styled-components";

import { MenuElement } from "../MenuElement";
import { HeaderWrapper, MenuWrapper } from "./styles";
import { LoadingSkeleton } from "../LoadingSkeleton";
import { useNavigate, useParams } from "react-router-dom";

export const Header = () => {
  const { colors } = useTheme();
  const { data, isFetching } = useGetCompanies();
  const { id } = useParams();
  const navigate = useNavigate();

  const renderSkeleton = () => {
    return (
      <>
        <LoadingSkeleton height="20px" width="90px" $color={colors.blue500} />
        <LoadingSkeleton height="20px" width="90px" $color={colors.blue900} />
        <LoadingSkeleton height="20px" width="90px" $color={colors.blue900} />
      </>
    );
  };

  useEffect(() => {
    if (data?.length && !id) {
      navigate(`/company/${data[0].id}`);
    }
  }, [navigate, data, id]);

  return (
    <HeaderWrapper>
      <img src={logo} />
      <nav>
        <MenuWrapper>
          {!isFetching ? (
            <>
              {data?.map((company) => (
                <MenuElement company={company} key={company.id} />
              ))}
            </>
          ) : (
            renderSkeleton()
          )}
        </MenuWrapper>
      </nav>
    </HeaderWrapper>
  );
};
