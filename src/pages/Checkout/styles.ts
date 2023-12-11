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

export const PuchaseDetailsHeaderContainer = styled.header`
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

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
  grid-template-areas:
    "cep cep cep cep cep cep"
    "street street street street street street"
    "number number complement complement complement complement"
    "neighborhood neighborhood city city city uf";
`;

const BaseInput = styled.input`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.BASE_BUTTON};
  background: ${(props) => props.theme.BASE_INPUT};

  padding: 0.75rem;

  color: ${(props) => props.theme.BASE_TEXT};

  ::placeholder {
    color: ${(props) => props.theme.BASE_LABEL};
    font-size: 0.875rem;
    line-height: 130%;
  }
`;

export const CepInput = styled(BaseInput)`
  grid-area: cep;
  grid-column: 1 / 3;
`;

export const StreetInput = styled(BaseInput)`
  grid-area: street;
`;

export const NumberInput = styled(BaseInput)`
  grid-area: number;
  grid-column: 1 / 3;
`;

// TODO: fazer ele ser opcional
export const ComplementInput = styled(BaseInput)`
  grid-area: complement;
`;

export const NeighborhoodInput = styled(BaseInput)`
  grid-area: neighborhood;
`;

export const CityInput = styled(BaseInput)`
  grid-area: city;
`;

export const UfInput = styled(BaseInput)`
  grid-area: uf;
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  background: ${(props) => props.theme.BASE_CARD};
  border-radius: 6px;
`;

export const PaymentOptions = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`;

export const OptionCard = styled.button`
  background: ${(props) => props.theme.BASE_BUTTON};

  display: flex;
  align-items: center;

  gap: 0.75rem;

  padding: 1rem;
  border-radius: 6px;
  border: 0;

  color: ${(props) => props.theme.BASE_TEXT};
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;

  cursor: pointer;

  > svg {
    color: ${(props) => props.theme.PURPLE};
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

  > span {
    color: ${(props) => props.theme.BASE_TEXT};
    font-size: 0.75rem;
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
`;
