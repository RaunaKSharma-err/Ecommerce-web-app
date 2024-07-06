import { useEffect, useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Sidebar from "./sidebar";
import Products from "./Products";
import { toast } from "react-toastify";



function App() {
  const [cat, setCat] = useState<[]>([]);
  const [product, setProduct] = useState<[]>([]);
  const [getCatName, setGetCatName] = useState('');
  

  const getCatogories = () => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then((res) => res.data)
      .then((finalRes) => {
        setCat(finalRes);
      });
  };

  const getProducts = () => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => res.data)
      .then((finalproduct) => {
        setProduct(finalproduct);
      });
  };

  useEffect(() => {
    getCatogories();
    getProducts();
  }, []);

useEffect(()=>{
  if(getCatName!== '')
  axios.get(`https://fakestoreapi.com/products/category/${getCatName}`)
      .then((res) => res.data)
      .then((finalcatogory) => {
        setProduct(finalcatogory);
      });
      else{
        toast.error('No data found...!')
      }
},[getCatName])

  return (
    <>
      <div className="App">
        <Sidebar setGetCatName={setGetCatName} cat={cat} />
        <Products product={product} />
      </div>
    </>
  );
}

export default App;
