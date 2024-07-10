import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineChartdata = [
  {
    name: "Jan",
    ty: 4000,
    ly: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    ty: 3000,
    ly: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    ty: 2000,
    ly: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    ty: 2780,
    ly: 3908,
    amt: 2000,
  },
  {
    name: "May",
    ty: 1890,
    ly: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    ty: 2390,
    ly: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    ty: 3490,
    ly: 4300,
    amt: 2100,
  },
];

const DashboardLineChart = () => {
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
        width={Math.max(300, window.innerWidth - 700)}
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
