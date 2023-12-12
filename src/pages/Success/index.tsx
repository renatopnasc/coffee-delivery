import {
  Info,
  InfoContainer,
  OrderDetailsContainer,
  OrderInfoContainer,
  SuccessContainer,
  TitleContainer,
} from "./styles";

// Images import
import locationIcon from "../../assets/svg/icons/location.svg";
import timer from "../../assets/svg/icons/timer.svg";
import payment from "../../assets/svg/icons/payment.svg";

import deliveryImg from "../../assets/svg/delivery.svg";

export function Success() {
  return (
    <SuccessContainer>
      <TitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TitleContainer>

      <OrderDetailsContainer>
        <OrderInfoContainer>
          <InfoContainer>
            <img src={locationIcon} />
            <Info>
              <p>
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </Info>
          </InfoContainer>

          <InfoContainer>
            <img src={timer} />
            <Info>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </Info>
          </InfoContainer>

          <InfoContainer>
            <img src={payment} />
            <Info>
              <p>Pagamneto na entrega</p>
              <span>Cartão de Crédito</span>
            </Info>
          </InfoContainer>
        </OrderInfoContainer>

        <img src={deliveryImg} alt="" />
      </OrderDetailsContainer>
    </SuccessContainer>
  );
}
