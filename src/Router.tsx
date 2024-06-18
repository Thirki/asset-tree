import { Route, Routes } from "react-router-dom";
import { CompanyPage } from "./pages";
import { DefaultLayout } from "./layouts";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/company/:id" element={<CompanyPage />} />
      </Route>
    </Routes>
  );
};
