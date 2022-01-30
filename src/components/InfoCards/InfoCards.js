import React from "react";

function InfoCards() {
  return (
    <>
      <div className="row infoCards">
        {/* First Card of Info */}
        <div className="col-md-6">
          <div className="card border-0 text-left">
            <div className="card-body">
              <div className="row">
                <div className="col-md-8">
                  <h5 className="card-title mb-0 text-uppercase">Total Received</h5>
                  <h1>84,254.58</h1>
                  <span className="badge badge-success">+10% since last month</span>
                </div>
                <div className="col-md-4 cardLeft">
                  <span>Pending</span>
                  <p>15,000.00</p>
                  <span>In drafts</span>
                  <p>1,000.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card of Info */}
        <div className="col-md-6">
          <div className="card border-0 text-left">
            <div className="card-body">
              <div className="d-flex mb-3">
                <h6 className="font14">Powered by Quickpay</h6>
                <span className="badge badge-info ml-auto my-auto">Information</span>
              </div>
              <p className="font12 mb-0 greyClr text-justify">
                Quickpay lets you receive payments on the fly.
               
              </p>
              <p className="font12 mb-0 greyClr text-justify">
              Easily generate invoices that are print-ready, or simply <br/>share payment link via
                SMS/E-mail to request payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCards;
