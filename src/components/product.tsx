import React, { createContext, useEffect, useState } from "react";
import "/src/App.css";
import { useContext } from "react";
import { Getproduct } from "../App";
import {
  ProductIdContext,
  useProductIdContext,
} from "../context/productIdProvider";

interface Props {
  title: string;
  image: string;
  id: number;
}

export const GetProductId = createContext<Number | undefined>(undefined);

export default function Product() {
  const GetFinalProduct = useContext(Getproduct);
  const { setProductsId } = useProductIdContext();

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
          <button className="btn" onClick={()=>setProductsId(v.id)}>Add to Cart</button>
        </div>
      </div>
    );
  });
  return <>{pItems}</>;
}
