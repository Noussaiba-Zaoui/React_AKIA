import React from "react";
import { Link } from "react-router-dom";

const ShopNow = () => {
  return (
    <Link to="/Montage">
      <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
      Explore More
      </button>
    </Link>
  );
};

export default ShopNow;
