import styled from "styled-components";

export const Footer = styled.footer`
  margin: ${(props) => props.theme.space.xl};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const UnitWrapper = styled.div``;

export const Title = styled.h3`
  margin-bottom: ${(props) => props.theme.space.xs};
  color: ${(props) => props.theme.colors.gray950};
  font-weight: 600;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.gray500};
  font-weight: 400;

  display: flex;
  align-items: center;

  svg {
    margin-right: ${(props) => props.theme.space.xs};
  }
`;
