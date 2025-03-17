import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from './App/LoginPage';
import Sidebar from './App/Sidebar';
import ShoppingList from './App/ShoppingList';
import StockIn from './App/stockin'
import React from "react";
  
const App = () => {
  const token = localStorage.getItem("accessToken");

  return (
    <Router>
      <div className="app-container">
        {/* Render Sidebar only if the user is authenticated */}
        {token && <Sidebar />}

        <div className="main-content">
          <Routes>
            {/* Redirect to shopping-list if logged in, otherwise to login */}
            <Route path="/" element={token ? <Navigate to="/shopping-list" replace /> : <Navigate to="/login" replace />} />
            
            {/* Login Page (Only accessible if not logged in) */}
            <Route path="/login" element={token ? <Navigate to="/shopping-list" replace /> : <LoginForm />} />
            
            {/* Protected Routes */}
            <Route path="/shopping-list" element={token ? <ShoppingList /> : <Navigate to="/login" replace />} />
            <Route path="/stock-in" element={token ? <StockIn /> : <Navigate to="/login" replace />} />  {/* ✅ Added Stock In Page */}
            
            {/* Catch-All: Redirect unknown routes to login if not logged in */}
            <Route path="*" element={<Navigate to={token ? "/shopping-list" : "/login"} replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
