import styled from "styled-components";

interface IElementLinkProps {
  selected: boolean;
  $isloading: boolean;
}

export const ElementLink = styled.a<IElementLinkProps>`
  background-color: ${(props) => props.theme.colors.blue900};
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => `${props.theme.space.xxs} ${props.theme.space.xs}`};
  border-radius: ${(props) => props.theme.borderRadius.xs};

  font-family: Inter;
  font-size: ${(props) => props.theme.fontSizes.xs};
  line-height: ${(props) => props.theme.fontSizes.md};
  text-align: center;
  font-weight: 600;

  cursor: ${(props) => (props.$isloading ? "wait" : "pointer")};

  background-color: ${(props) =>
    props.selected ? props.theme.colors.blue500 : props.theme.colors.blue900};

  svg {
    margin-right: ${(props) => props.theme.space.xxs};
  }
`;
