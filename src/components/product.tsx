import React from 'react'
import '/src/App.css'
interface Props{
  title:string;
  image:string;
}
interface productProps{
  getProducts:Props[]
}
export default function Product({getProducts}:productProps) {
  let pItems = getProducts.map((v,i)=>{
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
