import { MapPinLine, Minus, Plus, Trash } from "phosphor-react";
import {
  AddressContainer,
  AmountContainer,
  CheckoutButton,
  CheckoutContainer,
  Counter,
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
  TotalContainer,
  ValuesContainer,
} from "./styles";

// Images Import
import coffee1 from "../../assets/svg/coffee1.svg";

import { useNavigate } from "react-router-dom";
import { ClientDataForm } from "./components/ClientDataForm";
import { Payment } from "./components/Payment";

export function Checkout() {
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
            <ClientDataForm />
          </form>
        </AddressContainer>

        <Payment />
      </PurchaseDetailsContainer>

      <SelectedProductsContainer>
        <h2>Cafés selecionados</h2>

        <ProductsContainer>
          <section>
            <Product>
              <ProductInfo>
                <img src={coffee1} alt="" />

                <ProductDetails>
                  <h1>Expresso Tradicional</h1>

                  <ProductActions>
                    <Counter>
                      <button>
                        <Minus size={14} weight="bold" />
                      </button>
                      <p>1</p>
                      <button>
                        <Plus size={14} weight="bold" />
                      </button>
                    </Counter>

                    <RemoveButton title="Remover produto">
                      <Trash size={16} />

                      <span>remover</span>
                    </RemoveButton>
                  </ProductActions>
                </ProductDetails>
              </ProductInfo>

              <ProductPrice>R$ 9,90</ProductPrice>
            </Product>
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

            <CheckoutButton onClick={handleCheckout}>
              confirmar pedido
            </CheckoutButton>
          </footer>
        </ProductsContainer>
      </SelectedProductsContainer>
    </CheckoutContainer>
  );
}
