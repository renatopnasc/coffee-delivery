import styled from "styled-components";

export const CheckoutContainer = styled.main`
  width: 100%;
  padding: 2.5rem 0;

  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme.BASE_SUBTITLE};
  }
`;

export const PurchaseDetailsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

export const AddressContainer = styled.section`
  width: 100%;
  padding: 2.5rem;
  background: ${(props) => props.theme.BASE_CARD};
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PurchaseDetailsHeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  > svg {
    color: ${(props) => props.theme.YELLOW_DARK};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    > h2 {
      color: ${(props) => props.theme.BASE_SUBTITLE};
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
      font-family: "Roboto", sans-serif;
    }

    > p {
      color: ${(props) => props.theme.BASE_TEXT};
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;
    }
  }
`;

export const SelectedProductsContainer = styled.aside`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

export const ProductsContainer = styled.section`
  padding: 2.5rem;
  padding-top: 1rem;
  background: ${(props) => props.theme.BASE_CARD};
  border-radius: 6px 44px;
`;

export const Product = styled.div`
  width: 100%;

  display: flex;
  align-items: start;
  justify-content: space-between;

  padding: 2rem 0.25rem;

  border-bottom: 1px solid ${(props) => props.theme.BASE_BUTTON};
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.125rem;

  img {
    width: 4rem;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > h1 {
    color: ${(props) => props.theme.BASE_SUBTITLE};
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const ProductActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  height: 2rem;
  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme.BASE_BUTTON};

  > button {
    display: flex;
    align-items: center;

    background: 0;
    border: 0;

    color: ${(props) => props.theme.PURPLE};

    cursor: pointer;

    transition: all 100ms ease-in-out;

    &:hover {
      color: ${(props) => props.theme.PURPLE_DARK};
    }
  }

  > p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.125rem;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  height: 2rem;
  padding: 0 0.5rem;

  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.BASE_BUTTON};

  color: ${(props) => props.theme.PURPLE};
  text-transform: uppercase;
  line-height: 160%;

  cursor: pointer;

  transition: all 100ms ease-in-out;

  > span {
    color: ${(props) => props.theme.BASE_TEXT};
    font-size: 0.75rem;
  }

  &:hover {
    background: ${(props) => props.theme.BASE_HOVER};
  }
`;

export const ProductPrice = styled.p`
  color: ${(props) => props.theme.BASE_TEXT};
  font-size: 1rem;
  font-weight: 700;
  line-height: 130%;
`;

export const ValuesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 1.5rem 0;
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
    color: ${(props) => props.theme.BASE_TEXT};
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }

  > p:first-child {
    font-size: 0.875rem;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
    color: ${(props) => props.theme.BASE_SUBTITLE};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  background: ${(props) => props.theme.YELLOW};
  padding: 0.75rem;
  border-radius: 6px;

  color: ${(props) => props.theme.WHITE};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;

  cursor: pointer;

  transition: all 100ms ease-in-out;

  &:hover {
    background: ${(props) => props.theme.YELLOW_DARK};
  }
`;
