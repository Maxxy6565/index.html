import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Shopping from "./ShoppingList";
import StockIn from "./stockin";
import "./Dashboard.css";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("shopping-list");  // ✅ State to track active page

  return (
    <div className="dashboard-container">
      {/* ✅ Pass setActivePage to Sidebar */}
      <Sidebar setActivePage={setActivePage} />
      
      <div className="content-area">
        {/* ✅ Render component dynamically based on activePage */}
        {activePage === "shopping-list" && <shopping setActivePage={setActivePage} />}
        {activePage === "stock-in" && <stockin/>}
      </div>
    </div>
  );
};

export default Dashboard;
