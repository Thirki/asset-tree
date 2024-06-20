import styled from "styled-components";

export const Section = styled.section`
  padding: ${(props) => props.theme.space.xs};
  width: 100%;
  height: 100%;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  border: ${({ theme }) => `${theme.border.thin} ${theme.colors.gray200}`};
  padding: ${(props) => props.theme.space.md};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space.sm};
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.gray950};
  font-size: 20px;

  span {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray600};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button<{ $isselected: boolean }>`
  border-radius: ${(props) => props.theme.borderRadius.sm};
  border: ${({ theme }) => `${theme.border.thin} ${theme.colors.gray200}`};
  padding: ${(props) => `${props.theme.space.xxs} ${props.theme.space.md}`};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space.xxs};

  color: ${(props) =>
    `${
      props.$isselected ? props.theme.colors.white : props.theme.colors.gray600
    }`};
  font-weight: 600;

  background-color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    `${
      props.$isselected ? props.theme.colors.blue500 : props.theme.colors.white
    }`};
  font-size: ${(props) => props.theme.fontSizes.sm};

  cursor: pointer;
`;

export const ContentWrapper = styled.section`
  height: 100%;
  gap: ${(props) => props.theme.space.xs};

  /* display: flex; */
  display: grid;
  grid-template-columns: 37% 63%;
`;
