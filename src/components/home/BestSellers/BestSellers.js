import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Salon Rose Élégance"
          price="350.00"
          color="Pink"
          badge={false}
          des="Plongez dans l'enchantement de notre Salon Rose Enchanté. Des tons doux créent une toile chaleureuse, transformant votre espace en une oasis rose."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Cuisine luxe beige"
          price="6997.00"
          color="Beige"
          badge={false}
          des="L'élégance intemporelle de notre Cuisine Luxe Beige marie harmonieusement la sophistication et le confort."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Cuisine Douceur Rose"
          price="4500.00"
          color="Pink"
          badge={false}
          des="Une cuisine tout en charme avec des tons doux. L'ambiance parfaite pour des moments délicieux."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Salon Noir Chic"
          price="6999.00"
          color="Black"
          badge={false}
          des="Un salon élégant dans l'obscurité. Un mélange de style moderne et de sophistication."
        />
      </div>
    </div>
  );
};

export default BestSellers;
