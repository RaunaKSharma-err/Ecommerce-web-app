import React from 'react'
import '/src/App.css'
import { useContext } from 'react';
import { Getproduct } from '../App';

interface Props{
  title:string;
  image:string;
}
export default function Product() {

  const GetFinalProduct = useContext(Getproduct);

  let pItems = GetFinalProduct?.map((v:Props,i)=>{
    
   return (
    <div className="products" key={i}>
    <div className="product-img">
     <img src= {v.image} className='w-[100%] h-auto object-cover prod-img'/>
    </div>
    <div className="content">
     <h3>{v.title}</h3>
    </div>
    <div className="buy-button">
     <button className='btn'>Add to Cart</button>
    </div>
     </div>
     )})
  return (
    <>
    {pItems}
    </>
  )
}
