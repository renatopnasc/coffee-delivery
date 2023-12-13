import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { productList } from "../../../../utils/items";
import {
  ActionsContainer,
  BuyButton,
  BuyOptionsContainer,
  CoffeeListContainer,
  Counter,
  ItemCard,
  List,
  Price,
} from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <List>
        {productList.map((product) => (
          <ItemCard key={product.id}>
            <img src={product.photo} />

            <span>{product.type}</span>

            <h1>{product.name}</h1>

            <p>{product.description}</p>

            <BuyOptionsContainer>
              <Price>
                R$ <span>{product.price}</span>
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

                <BuyButton title="Adicionar ao carrinho">
                  <ShoppingCart size={22} weight="fill" />
                </BuyButton>
              </ActionsContainer>
            </BuyOptionsContainer>
          </ItemCard>
        ))}
      </List>
    </CoffeeListContainer>
  );
}
