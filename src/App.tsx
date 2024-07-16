import "./App.css";
import Product from "./components/product";
import Header from "./components/header";
import { createContext,useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Hero from "./components/hero-sec";

interface Props{
  setGetCatName:(v:string)=>void;
}

export const Getproduct = createContext<[] | undefined>([]);
export const GetCategoryName = createContext<Props | undefined>(undefined)


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
              <GetCategoryName.Provider value={{setGetCatName}}>
              <Header getCatName={(v:string)=>setGetCatName(v)}/>
              </GetCategoryName.Provider>
              <Hero/>
              <div className="productsDisplay">
              <span className={`loading loading-spinner text-error absolute top-24 left-36 ${isLoading?'':'hidden'}`}></span>
              <Getproduct.Provider value={getProducts}>
                <Product/>
              </Getproduct.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

