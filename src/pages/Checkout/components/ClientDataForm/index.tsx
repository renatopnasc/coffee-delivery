import {
  CepInput,
  CityInput,
  ClientDataFormContainer,
  ComplementInput,
  NeighborhoodInput,
  NumberInput,
  StreetInput,
  UfInput,
} from "./styles";

export function ClientDataForm() {
  return (
    <ClientDataFormContainer>
      <CepInput type="text" placeholder="CEP" />
      <StreetInput placeholder="Rua" />
      <NumberInput placeholder="Número" />
      <ComplementInput placeholder="Complemento" />
      <NeighborhoodInput placeholder="Bairro" />
      <CityInput placeholder="Cidade" />
      <UfInput placeholder="UF" />
    </ClientDataFormContainer>
  );
}
