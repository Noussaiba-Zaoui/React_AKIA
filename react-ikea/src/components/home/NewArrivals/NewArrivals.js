import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Lit Douillet Beige"
            price="4444.00"
            color="Beige"
            badge={true}
            des="Le Lit Douillet Beige apporte une touche de confort et d'élégance à votre chambre."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Cuisine Élégance Beige"
            price="2500.00"
            color="Beige"
            badge={true}
            des="La Cuisine Élégance Beige marie le style et la fonctionnalité pour créer un espace culinaire raffiné."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Salon Harmonie Beige"
            price="8000.00"
            color="Beige"
            badge={true}
            des="Le Salon Harmonie Beige incarne l'élégance intemporelle et la tranquillité dans votre espace de vie."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Salon Élégance Noire"
            price="6000.00"
            color="Black"
            badge={false}
            des="Le Salon Élégance Noire marie sophistication moderne et ambiance chaleureuse."
          />
        </div>

        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Salon Harmonie Beige"
            price="8000.00"
            color="Beige"
            badge={true}
            des="Le Salon Harmonie Beige incarne l'élégance intemporelle et la tranquillité dans votre espace de vie."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Salon Élégance Noire"
            price="6000.00"
            color="Black"
            badge={false}
            des="Le Salon Élégance Noire marie sophistication moderne et ambiance chaleureuse."
          />
        </div>
        
      </Slider>
    </div>
  );
};

export default NewArrivals;
