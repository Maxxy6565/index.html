import React, { useState } from "react";
import "./ShoppingList.css";
import { useNavigate } from "react-router-dom";

const ShoppingList = () => {
  const navigate = useNavigate();
  const [isGenerated, setIsGenerated] = useState(false); // State to track content visibility

  return (
    <div className="shopping-list-container">
      <div className="nav-head">
          <h1>Shopping List</h1>
          <hr />
      </div>

      <p className="shopping-para">Click here to generate Shopping List</p>

      {/* Generate Button - Hides content when clicked */}
      <button 
        className="register-button-sh" 
        onClick={() => setIsGenerated(true)}
        disabled={isGenerated} // Disable the button after clicking
      >
        Generate
      </button>

      {/* Content - Hidden when isGenerated is true */}
      {!isGenerated && (
        <div className="shp-contain">
          <p className="info">Clicked At 10/03/2025 9:30AM</p>
          <p className="info">Shopping List Generated Successfully</p>
          <p className="info">Click Here To Open</p>
        </div>
      )}

      {/* Open Button - Shows content again when clicked */}
      <button 
        className="register-button-shp" 
        onClick={() => setIsGenerated(false)}
      >
        Open
      </button>
    </div>
  );
};

export default ShoppingList;
