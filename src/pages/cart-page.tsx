import React from "react";
import Header from "../components/header";

export interface Props {
  getCategory: string[];
  setGetCatName: (categoryName: string) => void;
  getProduct: () => void;
}

export default function Cart({
  getProduct,
  getCategory,
  setGetCatName,
}: Props) {
  return (
    <>
      <div className="App">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1 bg-white">
              <Header
                getProduct={getProduct}
                getCategory={getCategory}
                setGetCatName={setGetCatName}
              />
              <div className="productsDisplay">
                <span
                  className={`loading loading-spinner text-error absolute top-24 left-36`}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
