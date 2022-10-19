import React from "react";
import { ChartsHeader, Stacked as StackedChart } from "../../components";

const Stacked = ({ currentMode }) => {
  return (
    <div className="m-4 md:-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Stacked" title="Revenue Breakdown" />
      <div className="w-full">
        <StackedChart width="w-full" currentMode={currentMode} />
      </div>
    </div>
  );
};

export default Stacked;
