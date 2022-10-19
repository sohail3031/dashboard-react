import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
  PdfExport,
  ExcelExport,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/data/dummy";
import { Header } from "../components";

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="Page" title="Employees" />

      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search", "PdfExport", "ExcelExport"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject services={[Page, Search, Toolbar, PdfExport, ExcelExport]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
