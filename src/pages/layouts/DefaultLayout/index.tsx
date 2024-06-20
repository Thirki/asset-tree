import { Outlet } from "react-router-dom";
import { PageWrapper } from "./styles";
import { Header } from "../../../components";

export const DefaultLayout = () => {
  return (
    <PageWrapper>
      <Header />
      <Outlet />
    </PageWrapper>
  );
};
