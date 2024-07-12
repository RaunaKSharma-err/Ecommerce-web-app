import axios from "axios";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
interface Props {
  children: ReactNode;
}

export const CategoryContext = createContext<string[] | undefined>(undefined);

export const CategoryProvider: React.FC<Props> = ({ children }) => {
  const [allCategories, setAllCategory] = useState<string[]>([]);

  const getProductCategory = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => res.data)
      .then((finalProductCategries) => {
        setAllCategory(finalProductCategries);
      });
  };

  useEffect(()=>{
    getProductCategory();
  },[])

  return (
    <CategoryContext.Provider value={allCategories}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (CategoryContext == undefined) {
    throw new Error("Error");
  }
  return context;
};
