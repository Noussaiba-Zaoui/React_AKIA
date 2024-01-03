import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";
import Input from "../Input";

const Color = ({handleColorChange}) => {
  const [showColors, setShowColors] = useState(true);
  const colors = [

    {
      _id: 9003,
      title: "White",
      base: "#ffffff",
    },
    {
      _id: 9001,
      title: "Black",
      base: "#000000",
    },
    {
      _id: 9002,
      title: "Pink",
      base: "#ffc0cb",
    },
   
    {
      _id: 9004,
      title: "Beige",
      base: "#C8AD7F",
    }, 
    
    
  ];

  
  return (
    <div>
      <div
        onClick={() => setShowColors(!showColors)}
        className="cursor-pointer"
      >
        <NavTitle title="Shop by Color" icons={true} />
      </div>
      {showColors && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {colors.map((item) => (
              <Input
                key={item._id}
                handleRadioChange={handleColorChange}
                value={item.title}
                title={item.title}
                type="radio"
                name="category"
                color={item.base}
              
              />
            ))}

         
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Color;
