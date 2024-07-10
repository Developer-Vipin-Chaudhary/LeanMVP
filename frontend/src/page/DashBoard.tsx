import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Notifications from "../components/Notifications";
import Cards from "../components/Cards";
import DashboardLineChart from "../components/LineChart";
import DashboardBarChat from "../components/BarChart";
import DashboardPieChart from "../components/PieChart";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen flex flex-col lg:flex-row">
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <main className="flex-1 w-full p-4">
        <Header
          isNotificationOpen={isNotificationOpen}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          setisNotificationOpen={setIsNotificationOpen}
        />

        <div className="flex ">
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold ml-4">
            Today
          </span>
          <img
            src="assets/dashboard/arrowdown.png"
            alt="Arrow Down"
            className="w-6 h-6 rounded-full ml-2 mt-2"
          />
        </div>

        <Cards />
        <DashboardLineChart />

        <div className="flex flex-col lg:flex-row gap-8 m-8">
          <DashboardBarChat />
          <DashboardPieChart />
        </div>
      </main>

      <Notifications isNotificationOpen={isNotificationOpen} />
    </div>
  );
};

export default Dashboard;
