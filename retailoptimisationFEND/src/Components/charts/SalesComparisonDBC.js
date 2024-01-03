import React from "react";
import { Column } from "@ant-design/plots";
import { salesComparisonData } from "../constants";

export default function SalesComparisonDBC() {
  const data = salesComparisonData;
  const config = {
    data,
    isGroup: true,
    xField: "Month",
    yField: "Monthly Average rainfall",
    seriesField: "name",

    color: ["#1ca9e6", "#f88c24"],

    label: false
  };
  return <Column {...config} />;
}
