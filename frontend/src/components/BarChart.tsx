import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashboardBarChat = ({ BarChartData }) => {
  return (
    <div className="bg-gray-50 p-8 rounded shadow flex-1 ">
      <span className="text-gray-800 text-sm sm:text-base mx-2 sm:mx-4 font-bold">
        Traffice by Device
      </span>
      <div className="pt-8">
        <BarChart
          width={500}
          height={300}
          data={BarChartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default DashboardBarChat;
