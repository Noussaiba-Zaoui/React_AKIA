import React from "react";
import { Link } from "react-router-dom";
import { montageMan } from "../../../assets/images";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";
import montage from "./Montage";

const YearProduct = () => {
  return (
    <Link to="/montage">
      <div className="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont flex flex-col md:flex-row">
        <Image
          className="max-w-full h-auto object-contain md:w-1/3 md:h-full md:object-right "
          imgSrc={montageMan}
        />
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-primeColor">
            Montage
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
            Pour vous faciliter les choses, nous vous proposons un service qui se chargera de monter vos articles AKIA, chez vous ou sur votre lieu de travail.
          </p>
          <ShopNow />
        </div>
      </div>
    </Link>
  );
};

export default YearProduct;
