import React from "react";
import "./LoginForm.css";

async function logoutUser() {
    localStorage.clear();
    return 'Session Clear';
 }

const Logout= () => {

  const handleLogout = async (e) => {
    e.preventDefault();
    const response = await logoutUser();
    console.log(response);
    window.location.href = "/sidebar";
  };

  return (
      <form onSubmit={handleLogout}>
          <button className="register-button" type="logout">
           Logout
          </button>
      </form>
  );
};

export default Logout;
