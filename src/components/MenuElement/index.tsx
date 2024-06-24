import React from "react";
import { ElementLink } from "./styles";
import { ICompany } from "../../api/hooks";
import { useParams } from "react-router-dom";
import { TreeIcon } from "../../icons";
import { useCompanyContext } from "../../context/hooks";

interface IMenuElementProps {
  company: ICompany;
}

export const MenuElement: React.FC<IMenuElementProps> = ({ company }) => {
  const { id } = useParams();
  const { setSelectedCompany, isLoading } = useCompanyContext();

  const handleClickLink = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setSelectedCompany(company);
  };

  return (
    <li>
      <ElementLink
        onClick={handleClickLink}
        $isloading={!!isLoading}
        selected={id === company.id}
      >
        <TreeIcon />
        {company.name} Unit
      </ElementLink>
    </li>
  );
};
