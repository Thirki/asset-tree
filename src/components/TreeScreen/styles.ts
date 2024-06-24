import styled from "styled-components";

export const Container = styled.section`
  border: ${({ theme }) => `${theme.border.thin} ${theme.colors.gray200}`};
  border-radius: ${(props) => props.theme.borderRadius.xs};
  padding: ${(props) => `${props.theme.space.xxs} ${props.theme.space.xs}`};

  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

export const TreeWrapper = styled.div`
  flex-grow: 1;
  height: 80vh;
  overflow-y: auto;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space.xxs};
`;
