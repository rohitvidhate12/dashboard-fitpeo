import CanvasJSReact from "@canvasjs/react-charts";
import { red } from "@mui/material/colors";
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ChartBar = () => {
  const options = {
    title: {
      text: "Overview",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Jan", y: 8 },
          { label: "Feb", y: 5 },
          { label: "Mar", y: 10 },
          { label: "Apr", y: 8 },
          { label: "May", y: 9 },
          { label: "Jun", y: 4 },
          { label: "Jul", y: 9 },
          { label: "Aug", y: 10 },
          { label: "Sep", y: 8 },
          { label: "Oct", y: 7 },
          { label: "Nov", y: 5 },
          { label: "Dec", y: 9 },
        ],
      },
    ],
    axisY: { lineThickness: 0 },
  };
  return (
    <>
      <CanvasJSChart options={options} />
    </>
  );
};

export default ChartBar;
