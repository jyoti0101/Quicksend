import React from "react";
import Header from "./Header";
import InfoCards from "./InfoCards";
import InvoiceTable from "./InvoiceTable";

import TableSearchBox from "./TableSearchBox";
function MainContainer() {
  return (
    <>
      <Header />
      <InfoCards />
      <TableSearchBox />
      <InvoiceTable />
    </>
  );
}

export default MainContainer;
