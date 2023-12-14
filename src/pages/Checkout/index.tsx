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
  AmountContainer,
  CepInput,
  CheckoutButton,
  CheckoutContainer,
  CityInput,
  ClientDataFormContainer,
  ComplementInput,
  Counter,
  NeighborhoodInput,
  NumberInput,
  OptionButton,
  PaymentContainer,
  PaymentOptions,
  Product,
  ProductActions,
  ProductDetails,
  ProductInfo,
  ProductPrice,
  ProductsContainer,
  PurchaseDetailsContainer,
  PurchaseDetailsHeaderContainer,
  RemoveButton,
  SelectedProductsContainer,
  StreetInput,
  TotalContainer,
  UfInput,
  ValuesContainer,
} from "./styles";

// Images Import

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export function Checkout() {
  const {
    productsList,
    paymentOption,
    removeProductToOrderList,
    handlePaymentOption,
  } = useContext(OrderContext);

  const navigate = useNavigate();

  function handleCheckout() {
    navigate("/success");
  }

  return (
    <CheckoutContainer>
      <PurchaseDetailsContainer>
        <h2>Complete seu pedido</h2>

        <AddressContainer>
          <PurchaseDetailsHeaderContainer>
            <MapPinLine size={22} />

            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </PurchaseDetailsHeaderContainer>

          <form action="">
            <ClientDataFormContainer>
              <CepInput type="text" placeholder="CEP" />
              <StreetInput placeholder="Rua" />
              <NumberInput placeholder="Número" />
              <ComplementInput placeholder="Complemento" />
              <NeighborhoodInput placeholder="Bairro" />
              <CityInput placeholder="Cidade" />
              <UfInput placeholder="UF" />
            </ClientDataFormContainer>
          </form>
        </AddressContainer>

        <PaymentContainer>
          <PurchaseDetailsHeaderContainer>
            <CurrencyDollar size={22} color="#8047f8" />

            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PurchaseDetailsHeaderContainer>

          <PaymentOptions>
            <OptionButton
              onClick={() => handlePaymentOption("credit")}
              className={paymentOption === "credit" ? "selected" : ""}
              title="Cartão de crédito"
            >
              <CreditCard size={16} /> Cartão de crédito
            </OptionButton>

            <OptionButton
              onClick={() => handlePaymentOption("debit")}
              className={paymentOption === "debit" ? "selected" : ""}
              title="Cartão de débito"
            >
              <Bank size={16} /> cartão de débito
            </OptionButton>

            <OptionButton
              onClick={() => handlePaymentOption("cash")}
              className={paymentOption === "cash" ? "selected" : ""}
              title="Dinheiro"
            >
              <Money size={16} /> dinheiro
            </OptionButton>
          </PaymentOptions>
        </PaymentContainer>
      </PurchaseDetailsContainer>

      <SelectedProductsContainer>
        <h2>Cafés selecionados</h2>

        <ProductsContainer>
          <section>
            {productsList.map((product) => (
              <Product>
                <ProductInfo>
                  <img src={product.photo} alt="" />

                  <ProductDetails>
                    <h1>{product.name}</h1>

                    <ProductActions>
                      <Counter>
                        <button>
                          <Minus size={14} weight="bold" />
                        </button>
                        <p>{product.quantityOfProduct}</p>
                        <button>
                          <Plus size={14} weight="bold" />
                        </button>
                      </Counter>

                      <RemoveButton
                        onClick={() => removeProductToOrderList(product.id)}
                        title="Remover produto"
                      >
                        <Trash size={16} />

                        <span>remover</span>
                      </RemoveButton>
                    </ProductActions>
                  </ProductDetails>
                </ProductInfo>

                <ProductPrice>R$ {product.price}</ProductPrice>
              </Product>
            ))}
          </section>

          <footer>
            <ValuesContainer>
              <AmountContainer>
                <p>Total dos itens</p>
                <p>R$ 29,70</p>
              </AmountContainer>
              <AmountContainer>
                <p>Entrega</p>
                <p>R$ 3,50</p>
              </AmountContainer>
              <TotalContainer>
                <p>Total</p>
                <p>R$ 33,20</p>
              </TotalContainer>
            </ValuesContainer>

            <CheckoutButton
              disabled={paymentOption === null}
              onClick={handleCheckout}
            >
              confirmar pedido
            </CheckoutButton>
          </footer>
        </ProductsContainer>
      </SelectedProductsContainer>
    </CheckoutContainer>
  );
}
