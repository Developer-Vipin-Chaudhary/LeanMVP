import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashboardLineChart = ({ LineChartdata }) => {
  return (
    <div className="p-6 sm:p-10 m-2 sm:m-4 rounded-lg shadow bg-gray-50">
      <div className="flex items-center mb-4 flex-wrap">
        <span className="text-gray-800 text-sm sm:text-base mx-2 sm:mx-4 font-bold">
          Total Users
        </span>
        <span className="text-gray-400 text-sm sm:text-base mx-2 sm:mx-4">
          Total Projects
        </span>
        <span className="text-gray-400 text-sm sm:text-base mx-2 sm:mx-4">
          Operating Status
        </span>
        <span className="text-gray-400 text-sm sm:text-base mx-2 sm:mx-4">
          |
        </span>
        <span className="w-2 h-2 mt-1 mr-1 bg-blue-400 rounded-full"></span>
        <span className="text-gray-400 text-sm sm:text-base mx-1 sm:mx-4">
          Last year
        </span>
        <span className="w-2 h-2 mt-1 mr-1 bg-green-400 rounded-full"></span>
        <span className="text-gray-400 text-sm sm:text-base mx-1 sm:mx-4">
          This year
        </span>
      </div>

      <LineChart
        width={1200}
        height={250}
        data={LineChartdata}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        className="m-2"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="ly"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="ty" stroke="#82ca9d" />
      </LineChart>

      <div className="flex items-center mb-4 flex-wrap">
        <span className="text-gray-800 text-sm sm:text-base mx-2 sm:mx-4 font-bold underline">
          Overview
        </span>
        <span className="text-gray-400 text-sm sm:text-base mx-2 sm:mx-4">
          Target
        </span>
        <span className="text-gray-400 text-sm sm:text-base mx-2 sm:mx-4">
          Budget
        </span>
        <span className="text-gray-400 text-sm sm:text-base mx-2 sm:mx-4">
          Users
        </span>
        <span className="text-gray-400 text-sm sm:text-base mx-2 sm:mx-4">
          Files
        </span>
        <span className="text-gray-400 text-sm sm:text-base mx-2 sm:mx-4">
          Activity
        </span>
        <span className="text-gray-400 text-sm sm:text-base mx-2 sm:mx-4">
          Settings
        </span>
      </div>
    </div>
  );
};

export default DashboardLineChart;
