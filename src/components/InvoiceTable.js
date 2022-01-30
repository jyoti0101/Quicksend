import React from "react";
import InvoiceData from "./InvoiceData";
function InvoiceTable() {
  return (
    <>
    
      <table className="table">
        <thead>
          <tr>
            <th scope="col">InvoiceNumber</th>
            <th scope="col">Date</th>
            <th scope="col">Client</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {InvoiceData &&
            InvoiceData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.InvoiceNumber}</td>
                  <td>{item.Date}</td>
                  <td>{item.Client}</td>
                  <td>{item.Amount}</td>
                  <td>
                   
                    <span
                      className={`badge badge-${
                        item.Status === "Pending"
                          ? "info"
                          : item.Status === "Draft"
                          ? "light"
                          : item.Status === "Paid"
                          ? "success"
                          : ""
                      }`}
                    >
                       {item.Status}
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default InvoiceTable;
