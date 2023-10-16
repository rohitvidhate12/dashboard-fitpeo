import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "Customers",
    },
    subtitles: [
      {
        text: "65% Total New Customers",
        verticalAlign: "center",
        fontSize: 14,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: "Very Satisfied", y: 40 },
          { name: "Satisfied", y: 25 },
          { name: "Neutral", y: 35 },
        ],
      },
    ],
  };
  return (
    <>
      <CanvasJSChart options={options} />
    </>
  );
};

export default PieChart;
