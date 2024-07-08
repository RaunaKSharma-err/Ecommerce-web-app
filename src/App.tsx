import "./App.css";
import Product from "./components/product";
import Header from "./components/header";
import Home from "./pages/home";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function App() {
  const [getProducts, setGetProducts] = useState<[]>([]);
  const [getCategory, setGetCategory] = useState<[]>([]);
  const [getCatName , setGetCatName] = useState('');
  const [isLoading , setIsLoading] = useState(false);

  const getProduct = () => {
    setIsLoading(true)
    axios.get("https://fakestoreapi.com/products")
      .then((res) => res.data)
      .then((finalproduct) => {
        setGetProducts(finalproduct);
      });
      setIsLoading(false);
  };

  const getProductCategory = () => {
    setIsLoading(true)
    axios.get("https://fakestoreapi.com/products/categories")
      .then((res) => res.data)
      .then((finalProductCategries) => {
        setGetCategory(finalProductCategries);
      });
      setIsLoading(false)
  };
    useEffect(()=>{
      if (getCatName!=='') {
        setIsLoading(true)
      axios.get(`https://fakestoreapi.com/products/category/${getCatName}`)
      .then((res)=>res.data)
      .then((finalRes)=>{
      setGetProducts(finalRes)
      setIsLoading(false)
      })
      }
      else{
        toast.error("No Data Found....")
      }
    },[getCatName])

  useEffect(() => {
    getProduct();
    getProductCategory();
  }, []);

  return (
    <>
      <div className="App">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1 bg-white">
              <Header getCategory={getCategory} setGetCatName={setGetCatName}/>
              <Home />
              <div className="productsDisplay">
              <span className={`loading loading-spinner text-error absolute top-24 left-36 ${isLoading?'':'hidden'}`}></span>
                <Product getProducts={getProducts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
