import React from "react";
import Header from "./../Header/index";
import InfoCards from "./../InfoCards/index";
import InvoiceTable from "./../InvoiceTable/index";

import TableSearchBox from "./../TableSearchBox/index";
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
