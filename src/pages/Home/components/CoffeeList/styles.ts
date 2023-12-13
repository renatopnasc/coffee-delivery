import styled from "styled-components";

export const CoffeeListContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  padding: 2rem 0;

  h2 {
    color: ${(props) => props.theme.BASE_SUBTITLE};
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 2.5rem 2rem;
`;
