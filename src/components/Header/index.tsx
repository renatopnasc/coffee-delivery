import {
  HeaderContainer,
  ActionsHeaderContainer,
  LocationButton,
  CartButton,
  ProductCartCounter,
} from "./styles";

// Images imports
import logo from "../../assets/svg/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export function Header() {
  const { productsList } = useContext(OrderContext);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} />
      </NavLink>

      <ActionsHeaderContainer>
        <LocationButton title="Alterar região">
          <MapPin weight="fill" />
          Maceió, AL
        </LocationButton>

        <CartButton to="checkout" title="Checkout">
          <ShoppingCart weight="fill" />

          {productsList.length > 0 && (
            <ProductCartCounter>
              <span>{productsList.length}</span>
            </ProductCartCounter>
          )}
        </CartButton>
      </ActionsHeaderContainer>
    </HeaderContainer>
  );
}
