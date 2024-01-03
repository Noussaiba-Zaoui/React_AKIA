import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";


import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import Product from "../../components/home/Products/Product";
import { paginationItems } from "../../constants";
import ProductsResult from "../../components/pageProps/shopPage/ProductsResult";


const Shop = () => {

  

  const [selectedCategory,setSelectedCategory] = useState(null);

  const handleListChange =event => {
    setSelectedCategory(event.target.value);
   }

  



   function filteredData(products,selected){
    let filteredProducts = products;

    
    
    /*The filter method returns a new array
     containing only the elements that satisfy
      the provided condition*/


    //Selecter Filter
    if(selected){
     filteredProducts = filteredProducts.filter(
       ({category,color,price,productName})=>
       category===selected ||
       color === selected ||
       price === selected||
       productName === selected
     )


    }


   
   
    return filteredProducts.map(
      ({ _id, img, color, productName, price }) => (
        <Product
          key={_id}
          _id={_id}
          img={img}
          productName={productName}
          price={price}
          color={color}
          // ... other props
        />
      )
    );
     
 }

 const result = filteredData(paginationItems,selectedCategory);




  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav
              handleListChange={handleListChange}
              
           />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
       
          <ProductsResult result={result}  />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );


 
};

export default Shop;