import { Outlet } from "react-router-dom";
import { Header } from "../../components";
import { PageWrapper } from "./style";

export const DefaultLayout = () => {
  return (
    <PageWrapper>
      <Header />
      <Outlet />
    </PageWrapper>
  );
};
