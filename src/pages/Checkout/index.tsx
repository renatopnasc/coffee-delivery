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
import { useForm } from "react-hook-form";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const newAddressFormValidationSchema = zod.object({
  cep: zod.string().min(8).max(8),
  street: zod.string(),
  number: zod.string().max(3),
  complement: zod.string(),
  neighborhood: zod.string(),
  city: zod.string(),
  state: zod.string().min(2).max(2),
});

type NewAddressFormType = zod.infer<typeof newAddressFormValidationSchema>;

export function Checkout() {
  const newAddressForm = useForm<NewAddressFormType>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
    },
  });

  const { register, handleSubmit } = newAddressForm;

  const {
    productsList,
    paymentOption,
    removeProductToOrderList,
    handlePaymentOption,
    createNewClientData,
  } = useContext(OrderContext);

  const navigate = useNavigate();

  function onSubmit(data: NewAddressFormType) {
    navigate("/success");

    createNewClientData(data);
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

          <form id="addressForm" action="" onSubmit={handleSubmit(onSubmit)}>
            <ClientDataFormContainer>
              <CepInput type="text" placeholder="CEP" {...register("cep")} />
              <StreetInput placeholder="Rua" {...register("street")} />
              <NumberInput placeholder="Número" {...register("number")} />
              <ComplementInput
                placeholder="Complemento"
                {...register("complement")}
              />
              <NeighborhoodInput
                placeholder="Bairro"
                {...register("neighborhood")}
              />
              <CityInput placeholder="Cidade" {...register("city")} />
              <UfInput placeholder="UF" {...register("state")} />
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
              form="addressForm"
              type="submit"
              disabled={paymentOption === null}
            >
              confirmar pedido
            </CheckoutButton>
          </footer>
        </ProductsContainer>
      </SelectedProductsContainer>
    </CheckoutContainer>
  );
}
