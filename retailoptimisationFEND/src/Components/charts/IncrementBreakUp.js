import React from "react";
import { Bar } from "@ant-design/plots";
import { IncrementBreakUpData } from "../constants";

export default function IncrementBreakUp() {
  const data = IncrementBreakUpData;

  const config = {
    data,
    xField: "sales",
    yField: "type",
    meta: {
      type: {
        alias: "type",
      },
      sales: {
        alias: "sales",
      },
    },
    minBarWidth: 20,
    maxBarWidth: 20,
  };
  return <Bar {...config} />;
}
