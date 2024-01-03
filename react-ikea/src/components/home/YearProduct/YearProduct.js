import React from "react";
import { Link } from "react-router-dom";
import montagepic from "../../../assets/images/products/montagepic.png";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";
import Montage from "./Montage"; // Import Montage component

const YearProduct = () => {
  return (
    <Link to="/montage">
      <div className="w-full mb-20 md:mb-40 bg-[#f3f3f3] md:bg-transparent relative font-titleFont flex flex-col md:flex-row">
        <Image
          className="w-full h-[240px] object-cover md:w-1/3 md:h-auto md:object-right"
          imgSrc={montagepic}
        /><br></br>
        <div className="w-full md:w-2/3 xl:w-1/2 px-4 md:px-8 lg:px-70 flex flex-col items-start gap-8 justify-center">
        <h1 className="text-4xl font-semibold text-primeColor mb-2 md:mb-4">
          Assembly
        </h1>

          <p className="text-base font-normal text-primeColor max-w-[600px] md:max-w-full">
            To make things easier for you, we offer a service that will take care of assembling your AKIA items at your home or workplace.
          </p>
          <ShopNow />
        </div>
      </div>
    </Link>
  );
};

export default YearProduct;
