import React, { useState } from "react";
import "./stockin.css";
import { useNavigate } from "react-router-dom";

const StockIn = () => {
  const navigate = useNavigate();
  const [isGenerated, setIsGenerated] = useState(false);

  return (
    <div className="stock-in-container">
      <div className="title">
        <h2>Stock In</h2>
        <hr />
      </div>
      <div className="st-para">
        <p>Click Here For Stock In</p>
      </div>

      {/* Process Button */}
      <button
        className="stn-button"
        onClick={() => setIsGenerated(true)}
        disabled={isGenerated}
      >
        Process
      </button>

      {/* Show content only if isGenerated is false */}
      {!isGenerated && (
        <div className="stn-content">
          <p className="text-first">Clicked At 10/03/2025 9:30AM</p>
          <p className="text-second">StockIn Processed Successfully</p>
        </div>
      )}
    </div>
  );
};

export default StockIn;
