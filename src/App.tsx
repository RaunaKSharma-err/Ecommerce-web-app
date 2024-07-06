import { useEffect, useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Sidebar from "./sidebar";
import Products from "./Products";



function App() {
  const [cat, setCat] = useState<[]>([]);
  const [product, setProduct] = useState<[]>([]);
  const [getCat, setGetCat] = useState('');
  console.log(getCat);
  

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

  const getProductsCat = () => {
    axios.get(`https://fakestoreapi.com/products/category/${getCat}`)
      .then((res) => res.data)
      .then((finalcatogory) => {
        console.log(finalcatogory);
        
        setProduct(finalcatogory);
      });
  };

  useEffect(() => {
    getCatogories();
    getProducts();
    getProductsCat();
  }, []);

  return (
    <>
      <div className="App">
        <Sidebar setGetCat={setGetCat} cat={cat} />
        <Products product={product} />
      </div>
    </>
  );
}

export default App;
