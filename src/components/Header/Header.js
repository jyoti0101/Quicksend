import React from "react";

function Header() {
  return (
    <div className="row pb-4 header">
      <div className="col text-left">
        <h6 className="header-pretitle font14">Payments</h6>
      </div>
      <div className="col-auto text-right user">Good evening, Jatin <span>JB</span></div>
    </div>
  );
}

export default Header;
