import {useEffect, useState } from "react";
import Header from "../components/header";
import axios from "axios";
import { useProductIdContext } from "../context/productIdProvider";


interface Props{
  name:string;
  description:string;
  price:number;
  image:string;
}

export default function Cart() {

  const {productsId} = useProductIdContext();
  
  const [getProductById , setGetProductById] = useState<Props[]>([]);
  
  const GetProductWithID = () =>{
    productsId.map((v)=>{    
      return(
        axios.get(`https://fakestoreapi.com/products/${v}`)
        .then((finalres)=>{
          setGetProductById((prevResponse) => [...prevResponse,finalres.data]);   
        })
      )
    })
  }
  
  useEffect(()=>{
    if(productsId.length){
      GetProductWithID();}
    },[productsId])
    
  let ProductItem = getProductById?.map((v,i)=>{
    return(
      <div className="items" key={i}>
      <div className="item-details">
        <img src={v.image}/>
        <div className="cart-content">
          <p className="name">{v.name}</p>
          <p className="price">Rs {v.price}</p>
          <p className="description">
            {v.description}
          </p>
        </div>
      </div>
      <div className="quantity-sec">
        <button className="btn btn-warning">+</button>
        <p>20</p>
        <button className="btn btn-warning">-</button>
      </div>
    </div>
    )
  })

  return (
    <>
      <div className="App">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1 bg-white">
              <Header />
              <div className="cart-sec">
                <h3>YO-Cart</h3>
                <div className="display-items">

                 {ProductItem}

                </div>
              </div>
              <div className="amount-sec">
                <div className="amount pl-2 pr-2">
                  <div className="total-amount">
                  <p className="text-black">Total Amount</p>
                  <p className="text-orange-500 ">Rs 1500</p>
                  </div>
                  <div className="discount">
                    <p className="text-black discount-amt">Discount</p>
                    <p className="text-orange-500 discount-amt">0.00%</p>
                  </div>
                </div>
                <div className="net-amount p-1">
                    <div className="final-amt">
                      <p className="text-black pb-4 font-bold">Final Amount</p>
                      <p className="text-orange-500 pb-4 font-bold">Rs 1500</p>
                    </div>
                    <button className="btn btn-warning mb-2 text-white">Proceed to payment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
