import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import {
  OptionButton,
  PaymentContainer,
  PaymentOptions,
  PurchaseDetailsHeaderContainer,
} from "./styles";
import { useState } from "react";

type PaymentOptionType = "credit" | "debit" | "cash";

export function Payment() {
  const [paymentOption, setPaymentOption] = useState<PaymentOptionType | null>(
    null
  );

  function handlePaymentOption(option: PaymentOptionType) {
    setPaymentOption(option);
  }

  return (
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
  );
}
