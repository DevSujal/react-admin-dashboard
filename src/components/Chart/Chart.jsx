import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Chart = (props) => {
  return (
    <div className="chart">
      <h3 className="charttitle">{props.title}</h3>

      <div className="responsivecontainer">
        <ResponsiveContainer width="100%" className="responsivecontainer" aspect={ window.innerWidth > 600 ? 4/1 : 3/1}>
          <LineChart data={props.data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey={props.datakey} stroke="#5550bd" />
            <Tooltip />
            {props.isgreeded && (
              <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
