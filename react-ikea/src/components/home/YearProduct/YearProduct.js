// YearProduct.js

import React from "react";
import { Link } from "react-router-dom";
import montagepic from "../../../assets/images/products/montagepic.png";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";
import Montage from "./Montage"; // Import Montage component

const YearProduct = () => {
  return (
    <Link to="/montage">
      <div className="w-full h-80 mb-40 bg-[#f3f3f3] md:bg-transparent relative font-titleFont flex flex-col md:flex-row">
        <Image
          className="max-w-full h-auto object-contain md:w-1/3 md:h-cover md:object-right "
          imgSrc={montagepic}
        />
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-primeColor">
            Assembly
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
            To make things easier for you, we offer a service that will take care of assembling your AKIA items at your home or workplace.
          </p>
          <ShopNow />
        </div>
      </div>
    </Link>
  );
};

export default YearProduct;
