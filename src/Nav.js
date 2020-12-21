import React from "react";

const Nav = (props) => {
  const { totalCounters } = props;
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <h1 className="navbar-brand">
          Cart
          <span className="badge badge-pill badge-secondary m-2">
            {totalCounters.length}
          </span>
        </h1>
      </nav>
    </div>
  );
};

export default Nav;
