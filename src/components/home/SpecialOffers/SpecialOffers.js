import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="chambre à coucher"
          price="350.00"
          color="Black"
          badge={true}
          des="Un havre de tranquillité moderne où le noir élégant rencontre la simplicité sophistiquée. La Chambre Ébène offre un espace intime et chic pour des nuits élégantes."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Salon Cozy"
          price="180.00"
          color="White"
          badge={true}
          des="Épurez votre espace avec notre Salon Luminance, où le blanc crée une atmosphère claire et apaisante. Simplicité et élégance s'unissent pour une expérience lumineuse et accueillante."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Cuisine luxe"
          price="250.00"
          color="Black"
          badge={true}
          des="Découvrez le raffinement ultime de notre Cuisine Noir Éclat. Meubles élégants, noir profond, une fusion parfaite de luxe contemporain. Une expérience culinaire où style et sophistication se marient harmonieusement."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Salon blanc"
          price="220.00"
          color="Black"
          badge={true}
          des="Détendez-vous dans notre Salon blanc Cozy, où l'élégance du blanc s'unit à une atmosphère chaleureuse. Des meubles douillets, une invitation à la détente. Un sanctuaire intime au charme enveloppant."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
