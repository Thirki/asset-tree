import React from "react";
import tree from "../../assets/tree.svg";
import { ElementLink } from "./styles";
import { ICompany } from "../../api/hooks";
import { useNavigate, useParams } from "react-router-dom";

interface IMenuElementProps {
  company: ICompany;
}

export const MenuElement: React.FC<IMenuElementProps> = ({ company }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClickLink = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    navigate(`/company/${company.id}`);
  };

  return (
    <li>
      <ElementLink onClick={handleClickLink} selected={id === company.id}>
        <img src={tree} />
        {company.name} Unit
      </ElementLink>
    </li>
  );
};
