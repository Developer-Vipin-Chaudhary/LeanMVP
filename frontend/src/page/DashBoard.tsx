import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Notifications from "../components/Notifications";
import Cards from "../components/Cards";
import DashboardLineChart from "../components/LineChart";
import DashboardBarChat from "../components/BarChart";
import DashboardPieChart from "../components/PieChart";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [LineChartdata, setLineChartdata] = useState([]);
  const [BarChartData, setBarChartData] = useState([]);
  const [PieChartData, setPieChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true); // Start loading

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERURL}/api/data`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.status === 200) {
          const data = response.data;

          setLineChartdata(data.LineChartdata);
          setBarChartData(data.BarChartData);
          setPieChartData(data.PieChartData);
          setLoading(false); // Stop loading
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.error(error.response.data.error);
        navigate("/");
        console.log(error.response.data.error);
        setLoading(false); // Stop loading
      }
    };
    fetchdata();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader">Loading...</div>{" "}
        {/* You can style this loader or use a spinner component */}
      </div>
    );
  }

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
        <DashboardLineChart LineChartdata={LineChartdata} />

        <div className="flex flex-col lg:flex-row gap-8 m-8">
          <DashboardBarChat BarChartData={BarChartData} />
          <DashboardPieChart PieChartData={PieChartData} />
        </div>
      </main>

      <Notifications isNotificationOpen={isNotificationOpen} />
    </div>
  );
};

export default Dashboard;
