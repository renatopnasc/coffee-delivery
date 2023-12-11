import {
  ActionsContainer,
  BuyButton,
  BuyOptionsContainer,
  CoffeeListContainer,
  Counter,
  HomeContainer,
  IntroContainer,
  Item,
  ItemCard,
  ItemsDescriptionContainer,
  List,
  Price,
  StoreDescriptionContainer,
  TitleContainer,
} from "./styles";

// Images import
import coffeeBg from "../../assets/svg/coffeeBg.svg";
import cartIcon from "../../assets/svg/icons/cart.svg";
import boxIcon from "../../assets/svg/icons/box.svg";
import timerIcon from "../../assets/svg/icons/timer.svg";
import coffeeIcon from "../../assets/svg/icons/coffee.svg";
import coffee1 from "../../assets/svg/coffee1.svg";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

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

      <CoffeeListContainer>
        <h2>Nossos cafés</h2>

        <List>
          <ItemCard>
            <img src={coffee1} />

            <span>tradicional</span>

            <h1>Expresso Tradicional</h1>

            <p>O tradicional café feito com água quente e grãos moídos</p>

            <BuyOptionsContainer>
              <Price>
                R$ <span>9,90</span>
              </Price>

              <ActionsContainer>
                <Counter>
                  <button>
                    <Minus weight="bold" />
                  </button>
                  <p>1</p>
                  <button>
                    <Plus weight="bold" />
                  </button>
                </Counter>

                <BuyButton title="Comprar">
                  <ShoppingCart size={22} weight="fill" />
                </BuyButton>
              </ActionsContainer>
            </BuyOptionsContainer>
          </ItemCard>

          <ItemCard>
            <img src={coffee1} />

            <span>tradicional</span>

            <h1>Expresso Tradicional</h1>

            <p>O tradicional café feito com água quente e grãos moídos</p>

            <BuyOptionsContainer>
              <Price>
                R$ <span>9,90</span>
              </Price>

              <ActionsContainer>
                <Counter>
                  <button>
                    <Minus weight="bold" />
                  </button>
                  <p>1</p>
                  <button>
                    <Plus weight="bold" />
                  </button>
                </Counter>

                <BuyButton title="Comprar">
                  <ShoppingCart size={22} weight="fill" />
                </BuyButton>
              </ActionsContainer>
            </BuyOptionsContainer>
          </ItemCard>

          <ItemCard>
            <img src={coffee1} />

            <span>tradicional</span>

            <h1>Expresso Tradicional</h1>

            <p>O tradicional café feito com água quente e grãos moídos</p>

            <BuyOptionsContainer>
              <Price>
                R$ <span>9,90</span>
              </Price>

              <ActionsContainer>
                <Counter>
                  <button>
                    <Minus weight="bold" />
                  </button>
                  <p>1</p>
                  <button>
                    <Plus weight="bold" />
                  </button>
                </Counter>

                <BuyButton title="Comprar">
                  <ShoppingCart size={22} weight="fill" />
                </BuyButton>
              </ActionsContainer>
            </BuyOptionsContainer>
          </ItemCard>

          <ItemCard>
            <img src={coffee1} />

            <span>tradicional</span>

            <h1>Expresso Tradicional</h1>

            <p>O tradicional café feito com água quente e grãos moídos</p>

            <BuyOptionsContainer>
              <Price>
                R$ <span>9,90</span>
              </Price>

              <ActionsContainer>
                <Counter>
                  <button>
                    <Minus weight="bold" />
                  </button>
                  <p>1</p>
                  <button>
                    <Plus weight="bold" />
                  </button>
                </Counter>

                <BuyButton title="Comprar">
                  <ShoppingCart size={22} weight="fill" />
                </BuyButton>
              </ActionsContainer>
            </BuyOptionsContainer>
          </ItemCard>

          <ItemCard>
            <img src={coffee1} />

            <span>tradicional</span>

            <h1>Expresso Tradicional</h1>

            <p>O tradicional café feito com água quente e grãos moídos</p>

            <BuyOptionsContainer>
              <Price>
                R$ <span>9,90</span>
              </Price>

              <ActionsContainer>
                <Counter>
                  <button>
                    <Minus weight="bold" />
                  </button>
                  <p>1</p>
                  <button>
                    <Plus weight="bold" />
                  </button>
                </Counter>

                <BuyButton title="Comprar">
                  <ShoppingCart size={22} weight="fill" />
                </BuyButton>
              </ActionsContainer>
            </BuyOptionsContainer>
          </ItemCard>
        </List>
      </CoffeeListContainer>
    </HomeContainer>
  );
}
