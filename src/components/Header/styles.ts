import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  grid-area: header;

  padding: 2rem 0;
`;

export const ActionsHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  border: 0;
  background: ${(props) => props.theme.PURPLE_LIGHT};
  padding: 0.5rem;
  border-radius: 6px;

  font-size: 0.875rem;
  color: ${(props) => props.theme.PURPLE_DARK};
  font-weight: 400;
  line-height: 130%;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.PURPLE};
    width: 1.375rem;
    height: 1.375rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

// TODO: Transformar em um componente geral
export const CartButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border: 0;
  background: ${(props) => props.theme.YELLOW_LIGHT};
  border-radius: 6px;

  color: ${(props) => props.theme.YELLOW_DARK};

  position: relative;

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }

  cursor: pointer;
`;

export const ProductCartCounter = styled.div`
  width: 1.125rem;
  height: 1.125rem;

  border-radius: 999px;
  background: ${(props) => props.theme.YELLOW_DARK};

  position: absolute;
  top: -8px;
  right: -8px;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${(props) => props.theme.WHITE};
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: -0.72px;
    text-align: center;
  }
`;
