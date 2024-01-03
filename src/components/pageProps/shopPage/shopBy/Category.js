import React from 'react';
import NavTitle from './NavTitle';
import Input from "../Input"


const Category = ({ handleRadioChange }) => {
 
  const categories = [
    { value: '', title: 'All' },
    { value: 'cuisine', title: 'Cuisine' },
    { value: 'lit', title: 'Chambre à coucher' },
    { value: 'salon', title: 'Salon' },
    // Add more categories as needed
  ];

  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" />
      <div>
        <ul className="cursor-pointer flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {/* Render the "All" option similar to the Input component */}
          <Input
            key={categories[0].value}
            handleRadioChange={handleRadioChange}
            value={categories[0].value}
            title={categories[0].title}
            name="category"
          />
          {/* Render the rest of the categories */}
          {categories.slice(1).map(({ value, title }) => (
            <Input
              key={value}
              handleRadioChange={handleRadioChange}
              value={value}
              title={title}
              name="category"
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
