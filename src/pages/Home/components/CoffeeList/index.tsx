import { productList } from "../../../../utils/items";
import { CoffeeListContainer, List } from "./styles";
import { CoffeeCard } from "../CoffeeCard";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <List>
        {productList.map((product) => (
          <CoffeeCard key={product.id} product={product} />
        ))}
      </List>
    </CoffeeListContainer>
  );
}
