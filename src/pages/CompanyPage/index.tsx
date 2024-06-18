import { useParams } from "react-router-dom";

export const CompanyPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Hello from CompanyPage {id}</h1>
    </div>
  );
};
