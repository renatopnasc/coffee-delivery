import {
  HomeContainer,
  IntroContainer,
  Item,
  ItemsDescriptionContainer,
  StoreDescriptionContainer,
  TitleContainer,
} from "./styles";

// Images import
import coffeeBg from "../../assets/svg/coffeeBg.svg";
import cartIcon from "../../assets/svg/icons/cart.svg";
import boxIcon from "../../assets/svg/icons/box.svg";
import timerIcon from "../../assets/svg/icons/timer.svg";
import coffeeIcon from "../../assets/svg/icons/coffee.svg";
import { CoffeeList } from "./components/CoffeeList";

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <img
          src={coffeeBg}
          alt="Copo de café branco com tampa preta e um rótulo com o nome da marca"
        />

        <StoreDescriptionContainer>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleContainer>

          <ItemsDescriptionContainer>
            <Item>
              <img src={cartIcon} alt="" />
              <p>Compra simples e segura</p>
            </Item>
            <Item>
              <img src={boxIcon} alt="" />
              <p>Embalagem mantém o café intacto</p>
            </Item>
            <Item>
              <img src={timerIcon} alt="" />
              <p>Entrega rápida e rastreada</p>
            </Item>
            <Item>
              <img src={coffeeIcon} alt="" />
              <p>O café chega fresquinho até você</p>
            </Item>
          </ItemsDescriptionContainer>
        </StoreDescriptionContainer>
      </IntroContainer>

      <CoffeeList />
    </HomeContainer>
  );
}
