import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
  PdfExport,
  ExcelExport,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/data/dummy";
import { Header } from "../components";

// var grid = "";

// const exportData = (args) => {
//   if (grid && args.item.id === "grid_pdfexport") {
//     const exportProperties = {
//       exportType: "CurrentPage",
//     };

//     grid.pdfExport(exportProperties);
//   }
// };

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="Page" title="Customers" />

      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete", "PdfExport", "ExcelExport"]}
        width="auto"
        editSettings={{ allowDeleting: true, allowEditing: true }}
        allowPdfExport={true}
        // toolbarClick={exportData}
        // ref={(g) => (grid = g)}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject
          services={[
            Page,
            Toolbar,
            Selection,
            Edit,
            Sort,
            Filter,
            PdfExport,
            ExcelExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
