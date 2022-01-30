import React from "react";
// import search from "../assets/icons/search.svg"

function TableSearchBox() {
  return (
    <>
    <div className="row pt-5">
      <div className="col text-left">
        <h6 className="header-pretitle">Invoices</h6>
        <p className="greyClr font12">Find your recent transactions below.</p>
      </div>
      <div className="col-auto text-right"><button className="btn btn-primary">+ NEW INVOICE</button></div>
    </div>
      <div className="row mt-4">
        <div className="col-md-10">
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Invoices"
            />
          </div>
        </div>
        <div className="col-md-2">
          <div className="form-group">
            <select className="form-control">
              <option>This week</option>
              <option>Last week</option>
              <option>Date range</option>
              <option>All time</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableSearchBox;
