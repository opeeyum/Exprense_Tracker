import "./Chart.css";
import ChartBar from "./ChartBar.js";

const Chart = props => {
  const { dataPoints } = props;
  const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map(datapoint => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        />
      ))}
    </div >
  );
};

export default Chart;