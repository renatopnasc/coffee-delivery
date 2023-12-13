import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  background: ${(props) => props.theme.BASE_CARD};
  border-radius: 6px;
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

export const PaymentOptions = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`;

export const OptionButton = styled.button`
  background: ${(props) => props.theme.BASE_BUTTON};

  display: flex;
  align-items: center;

  gap: 0.75rem;

  padding: 1rem;
  border-radius: 6px;
  border: 1px solid transparent;

  color: ${(props) => props.theme.BASE_TEXT};
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;

  cursor: pointer;

  transition: all 100ms ease-in-out;

  > svg {
    color: ${(props) => props.theme.PURPLE};
  }

  &:hover {
    background: ${(props) => props.theme.BASE_HOVER};
  }

  &.selected {
    background: ${(props) => props.theme.PURPLE_LIGHT};
    border: 1px solid ${(props) => props.theme.PURPLE};
  }
`;
