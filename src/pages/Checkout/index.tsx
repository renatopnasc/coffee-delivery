import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import {
  AddressContainer,
  CepInput,
  CheckoutContainer,
  CityInput,
  ComplementInput,
  Counter,
  FormContainer,
  NeighborhoodInput,
  NumberInput,
  OptionCard,
  PaymentContainer,
  PaymentOptions,
  Product,
  ProductActions,
  ProductDetails,
  ProductInfo,
  ProductsContainer,
  PuchaseDetailsHeaderContainer,
  PurchaseDetailsContainer,
  RemoveButton,
  SelectedProdusctsContainer,
  StreetInput,
  UfInput,
} from "./styles";

// Images Import
import coffee1 from "../../assets/svg/coffee1.svg";

export function Checkout() {
  return (
    <CheckoutContainer>
      <PurchaseDetailsContainer>
        <h2>Complete seu pedido</h2>

        <AddressContainer>
          <PuchaseDetailsHeaderContainer>
            <MapPinLine size={22} />

            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </PuchaseDetailsHeaderContainer>

          <form action="">
            <FormContainer>
              <CepInput type="text" placeholder="CEP" />
              <StreetInput placeholder="Rua" />
              <NumberInput placeholder="Número" />
              <ComplementInput placeholder="Complemento" />
              <NeighborhoodInput placeholder="Bairro" />
              <CityInput placeholder="Cidade" />
              <UfInput placeholder="UF" />
            </FormContainer>
          </form>
        </AddressContainer>

        <PaymentContainer>
          <PuchaseDetailsHeaderContainer>
            <CurrencyDollar size={22} color="#8047f8" />

            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PuchaseDetailsHeaderContainer>

          <PaymentOptions>
            <OptionCard>
              <CreditCard size={16} /> Cartão de crédito
            </OptionCard>

            <OptionCard>
              <Bank size={16} /> cartão de débito
            </OptionCard>

            <OptionCard>
              <Money size={16} /> dinheiro
            </OptionCard>
          </PaymentOptions>
        </PaymentContainer>
      </PurchaseDetailsContainer>

      <SelectedProdusctsContainer>
        <h2>Cafés selecionados</h2>

        <ProductsContainer>
          <Product>
            <ProductInfo>
              <img src={coffee1} alt="" />

              <ProductDetails>
                <h1>Expresso Tradicional</h1>

                <ProductActions>
                  <Counter>
                    <button>
                      <Minus />
                    </button>
                    <p>1</p>
                    <button>
                      <Plus />
                    </button>
                  </Counter>

                  <RemoveButton>
                    <Trash size={16} color="#8047f8" /> Remover
                  </RemoveButton>
                </ProductActions>
              </ProductDetails>
            </ProductInfo>
          </Product>

          <Product>
            <ProductInfo>
              <img src={coffee1} alt="" />

              <ProductDetails>
                <h1>Expresso Tradicional</h1>

                {/* Refazer */}
                <ProductActions>
                  <Counter>
                    <button>
                      <Minus />
                    </button>
                    <p>1</p>
                    <button>
                      <Plus />
                    </button>
                  </Counter>

                  <RemoveButton>
                    <Trash size={16} color="#8047f8" /> Remover
                  </RemoveButton>
                </ProductActions>
              </ProductDetails>
            </ProductInfo>
          </Product>
        </ProductsContainer>
      </SelectedProdusctsContainer>
    </CheckoutContainer>
  );
}
