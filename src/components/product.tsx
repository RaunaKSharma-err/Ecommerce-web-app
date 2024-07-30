import { createContext } from "react";
import "/src/App.css";
import { useContext } from "react";
import { Getproduct } from "../App";
import { useProductIdContext } from "../context/productIdProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  title: string;
  image: string;
  id: number;
}

export const GetProductId = createContext<Number | undefined>(undefined);

export default function Product() {
  const GetFinalProduct = useContext(Getproduct);
  const { setProductsId } = useProductIdContext();

  const addToCartBtnFunction = (id: number) => {
    setProductsId(id);
    toast.success("Item Added to Cart");
  };

  let pItems = GetFinalProduct?.map((v: Props, i) => {
    return (
      <div className="products" key={i}>
        <div className="product-img">
          <img
            src={v.image}
            className="w-[100%] h-auto object-cover prod-img"
          />
        </div>
        <div className="content">
          <h3>{v.title}</h3>
        </div>
        <div className="buy-button">
          <button className="btn" onClick={() => addToCartBtnFunction(v.id)}>
            Add to Cart
          </button>
        </div>
        <ToastContainer />;
      </div>
    );
  });
  return <>{pItems}</>;
}
