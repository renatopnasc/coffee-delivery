import {
  HeaderContainer,
  ActionsHeaderContainer,
  LocationButton,
  CartButton,
} from "./styles";

// Images imports
import logo from "../../assets/svg/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
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
        </CartButton>
      </ActionsHeaderContainer>
    </HeaderContainer>
  );
}
