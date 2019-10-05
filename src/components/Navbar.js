import React from "react";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar bg-success">
      <h3>{title}</h3>
    </nav>
  );
};

export default Navbar;
