import React  from "react";

import Category from "./shopBy/Category";
import Color from "./shopBy/Color";
import Price from "./shopBy/Price";

const ShopSideNav = (
  {handleListChange  }
) => {


 
  return (
    <div className="w-full flex flex-col gap-6 ">
      <Category handleRadioChange={handleListChange}   />
      <Color handleColorChange={handleListChange}     />
      <Price handlePriceChange={handleListChange }   />
    </div>
  );
};

export default ShopSideNav;
