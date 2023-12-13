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

export const ItemCard = styled.div`
  width: 100%;
  height: 310px;
  background: ${(props) => props.theme.BASE_CARD};
  border-radius: 6px 36px;
  padding: 1.25rem;

  box-shadow: 0 1rem 2rem -1.5rem rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -3rem;
  }

  > span {
    background: ${(props) => props.theme.YELLOW_LIGHT};
    color: ${(props) => props.theme.YELLOW_DARK};
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.25rem 0.5rem;

    border-radius: 100px;

    margin-top: 0.75rem;
  }

  h1 {
    color: ${(props) => props.theme.BASE_SUBTITLE};
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    font-family: "Baloo 2", sans-serif;

    margin-top: 1rem;
  }

  p {
    color: ${(props) => props.theme.BASE_LABEL};
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;

    margin-top: 0.5rem;
  }
`;

export const BuyOptionsContainer = styled.section`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  color: ${(props) => props.theme.BASE_TEXT};
  font-size: 0.875rem;
  line-height: 130%;

  span {
    background: 0;
    color: ${(props) => props.theme.BASE_TEXT};
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
  }
`;

export const ActionsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  height: 2.375rem;

  background: ${(props) => props.theme.BASE_BUTTON};
  border-radius: 6px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 0.875rem;
    height: 0.875rem;

    border: 0;
    background: 0;

    color: ${(props) => props.theme.PURPLE};
    cursor: pointer;
  }

  > p {
    color: ${(props) => props.theme.BASE_TITLE};
    line-height: 130%;
    width: 1.25rem;
    height: 1.25rem;
    font-size: 1rem;

    text-align: center;
    margin-top: 0;
  }
`;

export const BuyButton = styled.button`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme.PURPLE_DARK};
  border: 0;

  color: ${(props) => props.theme.BASE_CARD};

  cursor: pointer;

  transition: all 100ms ease-in-out;

  &:hover {
    background: ${(props) => props.theme.PURPLE};
  }
`;
