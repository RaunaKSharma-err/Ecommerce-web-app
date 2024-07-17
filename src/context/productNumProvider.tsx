import { createContext, useContext, useState, ReactNode} from "react";

interface ContextProps {
    productsNum: number | undefined;
    setProductsNum: (id: number) => void;
}

interface Props {
  children: ReactNode;
}

export const ProductNumContext = createContext<ContextProps | undefined>(undefined);

export const ProductNumProvider: React.FC<Props> = ({ children }) => {
  const [productsNum, setProductNum] = useState<number|undefined>(undefined);
  

  const setProductsNum = (id: number) => {
    setProductNum(id);
  };

  return (
    <ProductNumContext.Provider value={{ productsNum, setProductsNum }}>
      {children}
    </ProductNumContext.Provider>
  );
};

export const useProductNumContext = () => {
  const context = useContext(ProductNumContext);
  if (!context) {
    throw new Error("useProductIdContext must be used within a ProductIdProvider");
  }
  return context;
};
