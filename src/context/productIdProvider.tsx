import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useCookies } from "react-cookie";
interface ContextProps {
  productsId: number[];
  setProductsId: (id: number) => void;
  cookie: any;
}

interface Props {
  children: ReactNode;
}

export const ProductIdContext = createContext<ContextProps | undefined>(
  undefined
);

export const ProductIdProvider: React.FC<Props> = ({ children }) => {
  const [cookie, setCookie] = useCookies(["cart", "ids"]);

  const [productsId, setProductId] = useState<number[]>([]);

  const setProductsId = (id: number) => {
    // setProductId((prevIds) => [...prevIds, id]);
    if (cookie.ids instanceof Array) {
      setCookie("ids", [...cookie.ids, id]);
      return;
    }
    setCookie("ids", [id]);
  };

  return (
    <ProductIdContext.Provider value={{ cookie, productsId, setProductsId }}>
      {children}
    </ProductIdContext.Provider>
  );
};

export const useProductIdContext = () => {
  const context = useContext(ProductIdContext);
  if (!context) {
    throw new Error(
      "useProductIdContext must be used within a ProductIdProvider"
    );
  }
  return context;
};
