import React from "react";

const Navbar = ({ onOpen, onSearch }) => {
  console.log(onOpen, onSearch);
  const handleSearchTerm = (e) => {
    onSearch(e.target.value);
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm p-4">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Clients</a>
        </div>
        <div className="navbar-center">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-96"
              onChange={handleSearchTerm}
            />
          </div>
        </div>

        <div className="navbar-end">
          <a className="btn btn-primary" onClick={onOpen}>
            Add Client
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
