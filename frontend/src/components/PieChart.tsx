import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["lightgreen", "black", "lightblue", "purple"];
const DashboardPieChart = ({ PieChartData }) => {
  return (
    <div className="bg-gray-50 p-8 rounded shadow flex-1">
      <span className="text-gray-800 text-sm sm:text-base mx-2 sm:mx-4 font-bold">
        Traffice by Location
      </span>{" "}
      <div className="flex ">
        <PieChart width={250} height={300}>
          <Pie
            data={PieChartData}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {PieChartData.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="mt-32 ml-20">
          <ul>
            {PieChartData.map((data, index) => (
              <li key={index} className="flex items-center mb-4">
                <span
                  className="w-2 h-2   inline-block mr-2 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></span>
                <span className="mr-5">{data.name}</span>
                <span className="ml-auto">{data.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPieChart;
