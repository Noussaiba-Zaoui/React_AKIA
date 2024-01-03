import React from "react";


const Breadcrumbs = ({ title }) => {
 

  return (
    <div className="w-full py-10 xl:py-10 flex flex-col gap-3">
      <h1 className="text-5xl text-primeColor font-titleFont font-bold">
        {title}
      </h1>
      
    </div>
  );
};

export default Breadcrumbs;
