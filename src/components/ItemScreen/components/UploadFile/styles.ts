import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.blue50};
  border: ${({ theme }) => `${theme.border.thin} ${theme.colors.blue400}`};
  border-style: dashed;
  border-radius: ${(props) => props.theme.borderRadius.sm};

  width: 100%;
  height: 226px;

  div {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${(props) => props.theme.space.xs};

    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
  }
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.blue500};
`;
