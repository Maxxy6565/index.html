import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Logout from "./Logout";

const Sidebar = ({ setActivePage }) => {
  const [isReportOpen, setIsReportOpen] = useState(false);

  return (
    <div className="sidebar-container">
      <div>
        {/* Header Section */}
        <div className="sidebar-header">
          <h1 className="text-xl font-bold">MS IT</h1>
          <p className="text-sm text-gray-300">Linnworks Automation</p>
        </div>

        {/* Sidebar Menu */}
        <div className="sidebar-menu">
          <Link to="/shopping-list" className="sidebar-link">Shopping List</Link>
          <Link to="/stock-in" className="sidebar-link">Stock In</Link>
          <Link to="/prime-process" className="sidebar-link">Prime Process</Link>
          <Link to="/resend" className="sidebar-link">Resend</Link>
          
          {/* Report Section with Submenu as Links */}
          <div className="sidebar-item">
            <Link to="#" className="sidebar-link" onClick={() => setIsReportOpen(!isReportOpen)}>
              Report {isReportOpen ? "▲" : "▼"}
            </Link>
            {isReportOpen && (
              <div className="submenu">
                <Link to="/report/daily" className="submenu-link">Sold V Available</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div>
        <Logout />
      </div>
    </div>
  );
};

export default Sidebar;
