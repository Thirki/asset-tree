import styled from "styled-components";

export const Wrapper = styled.section`
  margin: ${(props) => `0 ${props.theme.space.xl}`};
  padding: ${(props) => `${props.theme.space.xl} 0`};

  display: grid;
  grid-template-columns: 336px 1fr;

  gap: ${(props) => props.theme.space.xl};

  border-bottom: ${({ theme }) =>
    `${theme.border.thin} ${theme.colors.gray200}`};
`;

export const About = styled.div`
  font-size: ${(props) => props.theme.fontSizes.md};
`;

export const EquipmentWrapper = styled.div`
  padding: ${(props) => `${props.theme.space.md} 0`};
  margin: ${(props) => `${props.theme.space.md} 0`};
  border-bottom: ${({ theme }) =>
    `${theme.border.thin} ${theme.colors.gray200}`};
`;

export const Title = styled.h3`
  margin-bottom: ${(props) => props.theme.space.xs};
  color: ${(props) => props.theme.colors.gray950};
  font-weight: 600;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.gray500};
  font-weight: 400;
`;

export const PictureWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DepartmentIcon = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.theme.space.xl};
  height: ${(props) => props.theme.space.xl};
  margin-right: ${(props) => props.theme.space.xs};
  border-radius: ${(props) => props.theme.borderRadius.full};

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.blue500};
`;
