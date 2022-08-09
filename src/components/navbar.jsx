import React from "react";

const Navbar = ({ totalCounters }) => {
    console.log('Navbar - Rendered');
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Navbar <span className    ="badge text-bg-warning"> {totalCounters} </span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
