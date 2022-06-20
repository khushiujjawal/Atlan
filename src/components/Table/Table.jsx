import React from "react";
import Table1 from "./Table1";
import Table0 from "./Table0";
import Table2 from "./Table2";
import Table3 from "./Table3";
const Table = ({ id }) => {
  if (id === 0) {
    return <Table0 />;
  }
  if (id === 1) {
    return <Table1 />;
  }
  if (id === 2) {
    return <Table2 />;
  }
  if (id === 3) {
    return <Table3 />;
  }
};

export default Table;
