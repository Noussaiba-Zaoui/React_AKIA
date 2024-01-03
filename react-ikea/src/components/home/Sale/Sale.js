import React from "react";
import { Link } from "react-router-dom";
import Image from "../../designLayouts/Image";

import pic2 from "../../../assets/images/products/pic2.webp";
import picguitar from "../../../assets/images/products/picguitar.png";
import etagere from "../../../assets/images/products/etagere.webp";

const Sale = () => {
  const imageStyle = {
    height: "0px", // Ajustez la hauteur selon vos besoins
    width: "100%",
    objectFit: "full",
  };

  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-1/3 h-full">
        <Link to="/shop">
          <Image style={imageStyle} imgSrc={pic2} />
        </Link>
      </div>
      <div className="w-full md:w-1/3 h-cover">
        <Link to="/shop">
          <Image style={imageStyle} imgSrc={picguitar} />
        </Link>
      </div>
      <div className="w-full md:w-1/3 h-full">
        <Link to="/shop">
          <Image style={imageStyle} imgSrc={etagere} />
        </Link>
      </div>
    </div>
  );
};

export default Sale;
