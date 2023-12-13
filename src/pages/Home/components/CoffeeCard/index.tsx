import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  ActionsContainer,
  BuyButton,
  BuyOptionsContainer,
  CoffeeCardContainer,
  Counter,
  Price,
} from "./styles";
import { useContext, useState } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";

type ProductType = {
  id: number;
  photo: string;
  name: string;
  type: string;
  description: string;
  price: string;
};

interface CoffeeCardProps {
  product: ProductType;
}

export function CoffeeCard({ product }: CoffeeCardProps) {
  const [quantityOfProduct, setQuantityOfProduct] = useState(0);

  const { addProductToOrderList } = useContext(OrderContext);

  function handleAddQuantityOfProduct() {
    setQuantityOfProduct((state) => state + 1);
  }

  function handleRemoveQuantityOfProduct() {
    if (quantityOfProduct === 0) return;

    setQuantityOfProduct((state) => state - 1);
  }

  return (
    <CoffeeCardContainer key={product.id}>
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
            <button onClick={handleRemoveQuantityOfProduct}>
              <Minus weight="bold" />
            </button>
            <p>{quantityOfProduct}</p>
            <button onClick={handleAddQuantityOfProduct}>
              <Plus weight="bold" />
            </button>
          </Counter>

          <BuyButton
            title="Adicionar ao carrinho"
            onClick={() =>
              addProductToOrderList({
                id: product.id,
                name: product.name,
                photo: product.photo,
                price: product.price,
                quantityOfProduct,
              })
            }
            disabled={quantityOfProduct === 0}
          >
            <ShoppingCart size={22} weight="fill" />
          </BuyButton>
        </ActionsContainer>
      </BuyOptionsContainer>
    </CoffeeCardContainer>
  );
}
