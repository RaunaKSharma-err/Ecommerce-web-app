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
  cookie:any;
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
    setCookie("ids", productsId);
  };
  // useEffect(() => {
  //   if (cookie.ids != undefined) {
  //     setCookie("cart", cookie.ids.length);
  //     setCookie("ids", productsId);
  //   }
  // }, [productsId]);
  useEffect(()=>{
    // setProductId(cookie.ids);
    console.log(cookie.ids);
    
  },[cookie.ids])
  return (
    <ProductIdContext.Provider value={{ cookie , productsId , setProductsId }}>
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
