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
}

interface Props {
  children: ReactNode;
}

export const ProductIdContext = createContext<ContextProps | undefined>(
  undefined
);

export const ProductIdProvider: React.FC<Props> = ({ children }) => {
  const [cookie, setCookie, removeCookie] = useCookies(["cart", "ids"]);

  const [productsId, setProductId] = useState<number[]>([]);

  const setProductsId = (id: number) => {
    setProductId((prevIds) => [...prevIds, id]);
  };
  useEffect(() => {
    setCookie("cart", cookie.ids.length);
    setCookie("ids", productsId);
  }, [productsId]);
  return (
    <ProductIdContext.Provider value={{ productsId, setProductsId }}>
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
