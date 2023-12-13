import coffe1 from "../assets/svg/coffee1.svg";
import coffe2 from "../assets/svg/coffee2.svg";
import coffe3 from "../assets/svg/coffee3.svg";
import coffe4 from "../assets/svg/coffee4.svg";

type ProductType = {
  photo: string;
  name: string;
  type: string;
  description: string;
  price: string;
};

export const productList: ProductType[] = [
  {
    photo: coffe1,
    name: "Expresso Tradicional",
    type: "tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    photo: coffe2,
    name: "Expresso Americano",
    type: "tradicional",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: "9,90",
  },
  {
    photo: coffe3,
    name: "Expresso Cremoso",
    type: "tradicional",
    description: "Café expresso tradicional com espuma cremosa",
    price: "9,90",
  },
  {
    photo: coffe4,
    name: "Expresso Gelado",
    type: "tradicional",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: "9,90",
  },
];
