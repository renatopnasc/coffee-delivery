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
  paymentOption: PaymentOptionType | null;
  addProductToOrderList: (product: OrderListProps) => void;
  removeProductToOrderList: (id: number) => void;
  handlePaymentOption: (option: PaymentOptionType) => void;
}

export const OrderContext = createContext({} as OrderContextType);

type PaymentOptionType = "credit" | "debit" | "cash";

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [productsList, setProductList] = useState<OrderListProps[]>([]);

  const [paymentOption, setPaymentOption] = useState<PaymentOptionType | null>(
    null
  );

  function handlePaymentOption(option: PaymentOptionType) {
    setPaymentOption(option);
  }

  function addProductToOrderList(product: OrderListProps) {
    setProductList((state) => [product, ...state]);
  }

  function removeProductToOrderList(id: number) {
    const newProductList = productsList.filter((product) => product.id !== id);
    setProductList(newProductList);
  }

  return (
    <OrderContext.Provider
      value={{
        productsList,
        paymentOption,
        addProductToOrderList,
        removeProductToOrderList,
        handlePaymentOption,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
