import React from "react";
import { Link } from "react-router-dom";
import Image from "../../designLayouts/Image";

import pics2 from "../../../assets/images/products/pics2.png";
import picsguitar from "../../../assets/images/products/picsguitar.png";
import etageres from "../../../assets/images/products/etageres.png";

const Sale = () => {
  const imageStyle = {
    height: "0px", // Ajustez la hauteur selon vos besoins
    width: "100%",
    objectFit: "full",
  };

  return (
    <div className="py-20 flex flex-col items-left">
      <h2 className="text-3xl font-bold mb-8 text-primeColor">
        Black Friday Reduction
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
        <div className="w-full md:w-1/3 h-full">
          <Link to="/shop">
            <Image style={imageStyle} imgSrc={pics2} />
          </Link>
        </div>
        <div className="w-full md:w-1/3 h-cover">
          <Link to="/shop">
            <Image style={imageStyle} imgSrc={picsguitar} />
          </Link>
        </div>
        <div className="w-full md:w-1/3 h-full">
          <Link to="/shop">
            <Image style={imageStyle} imgSrc={etageres} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
