import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Clients</a>
        </div>
        <div className="navbar-center"></div>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-96"
        />
        <div className="navbar-end">
          <a className="btn btn-primary">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
