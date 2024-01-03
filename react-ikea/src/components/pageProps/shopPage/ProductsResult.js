import React from "react";






const ProductsResult = ({result}) => {

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
      {result}
      </div>
      
    </div>
  );
};

export default ProductsResult;