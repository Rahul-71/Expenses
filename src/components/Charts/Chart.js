import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
  const values = props.dataPoints.map((datapoint) => datapoint.value);
  const maxValues = Math.max(...values);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValues}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
