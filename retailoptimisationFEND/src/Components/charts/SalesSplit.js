import React from "react";
import { Pie } from "@ant-design/plots";
import { salesSplitData } from "../constants";

export default function SalesSplit() {
 const data = salesSplitData
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    color: ["#1ca9e6", "#ff0c24", "#f8df24","#f88cff",],
    label: false,
    tooltip: {
      formatter: (datum) => ({ name: datum.type, value: datum.value }),
    },
    legend: {
      position: 'top', 
    },
    interactions: [
      {
        type: "element-active",
      },
    ],

    statistic: true,
  };

  return <Pie {...config} />;
}
