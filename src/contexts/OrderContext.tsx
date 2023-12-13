import { createContext, ReactNode, useState } from "react";

interface OrderContextProviderProps {
  children: ReactNode;
}

interface OrderListProps {
  id: number;
  photo: string;
  name: string;
  price: string;
  quantityOfProduct: number;
}

interface OrderContextType {
  productsList: OrderListProps[];
  addProductToOrderList: (product: OrderListProps) => void;
}

export const OrderContext = createContext({} as OrderContextType);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [productsList, setProductList] = useState<OrderListProps[]>([]);

  function addProductToOrderList(product: OrderListProps) {
    setProductList((state) => [product, ...state]);
  }

  return (
    <OrderContext.Provider value={{ productsList, addProductToOrderList }}>
      {children}
    </OrderContext.Provider>
  );
}
