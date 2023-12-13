import styled from "styled-components";

export const ClientDataFormContainer = styled.div`
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

  &:focus {
    border: 1px solid ${(props) => props.theme.YELLOW_DARK};
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
