import { Route, Routes } from "react-router-dom";
import { CompanyPage, DefaultLayout } from "./pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/company/:id" element={<CompanyPage />} />
      </Route>
    </Routes>
  );
};
