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

interface AddressFormData {
  number: string;
  state: string;
  cep: string;
  street: string;
  complement: string;
  neighborhood: string;
  city: string;
}

interface OrderContextType {
  clientData: AddressFormData;
  productsList: OrderListProps[];
  paymentOption: PaymentOptionType | null;
  addProductToOrderList: (product: OrderListProps) => void;
  removeProductToOrderList: (id: number) => void;
  handlePaymentOption: (option: PaymentOptionType) => void;
  createNewClientData: (data: AddressFormData) => void;
}

export const OrderContext = createContext({} as OrderContextType);

type PaymentOptionType = "credit" | "debit" | "cash";

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [productsList, setProductList] = useState<OrderListProps[]>([]);

  const [paymentOption, setPaymentOption] = useState<PaymentOptionType | null>(
    null
  );

  const [clientData, setClientData] = useState<AddressFormData>(
    {} as AddressFormData
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

  function createNewClientData(data: AddressFormData) {
    setClientData(data);
  }

  return (
    <OrderContext.Provider
      value={{
        clientData,
        productsList,
        paymentOption,
        addProductToOrderList,
        removeProductToOrderList,
        handlePaymentOption,
        createNewClientData,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
