import React from 'react';
import "./shopBy/categoryStyle.css"

const Input = ({ handleRadioChange, value, title ,color }) => {
  return (
    <li className="sidebar-label-container flex items-center gap-2">
      <input
        type="radio"
        id={value}
        value={value}
        name="category"
        onChange={handleRadioChange}  
      />
       <span className="checkmark" style={{backgroundColor:color}}></span>
      <label htmlFor={value}>{title}</label>
    </li>
  );
};

export default Input;