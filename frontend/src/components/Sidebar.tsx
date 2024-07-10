import axios from "axios";
import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen }) => {
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true); // Start loading

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERURL}/api/user`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.status === 200) {
          const data = response.data;

          console.log(data);
          setLoading(false); // Stop loading
          setUsername(data.user.username);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.error(error.response.data.error);
        console.log(error.response.data.error);
        setLoading(false); // Stop loading
      }
    };
    fetchdata();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <aside
      className={`w-64 bg-white shadow-lg p-4 fixed lg:relative z-20 transition-transform transform  border  border-white border-r-gray-200  ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="flex items-center mb-8">
        <img
          src="assets/sidebar/dp.png"
          alt="profile"
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="text-xl font-semibold">{username}</span>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <div className="flex justify-between items-center col-span-2 px-6 text-m">
              <span className="text-gray-500  ">Favorites</span>
              <span className="text-gray-300  ">Recently</span>
            </div>
            <ul className="mt-4">
              <li className="flex items-center p-2 mb-2  rounded-full hover:bg-gray-200 ">
                <img
                  src="assets/sidebar/dot.png"
                  alt="dot"
                  className="w-4 h-4 rounded-full mr-2"
                />
                <span>Overview</span>
              </li>
              <li className="flex items-center p-2 mb-2  rounded-full hover:bg-gray-200">
                <img
                  src="assets/sidebar/dot.png"
                  alt="dot"
                  className="w-4 h-4 rounded-full mr-2"
                />
                <span>Projects</span>
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <span className="text-gray-500 text-m">Dashboards</span>
            <ul className="mt-2">
              <li className="flex items-center m-2 p-2 hover:bg-gray-200 text-sm rounded-full">
                <img
                  src="assets/sidebar/rightarrow.png"
                  alt="arrow"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <img
                  src="assets/sidebar/default.png"
                  alt="dot"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>Default</span>
              </li>
              <li className="flex items-center m-2 p-2 hover:bg-gray-200 text-sm rounded-full">
                <img
                  src="assets/sidebar/rightarrow.png"
                  alt="arrow"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <img
                  src="assets/sidebar/ecommerce.png"
                  alt="dot"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>eCommerce</span>
              </li>
              <li className="flex items-center m-2 p-2 hover:bg-gray-200 text-sm rounded-full">
                <img
                  src="assets/sidebar/rightarrow.png"
                  alt="arrow"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <img
                  src="assets/sidebar/projects.png"
                  alt="dot"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>Projects</span>
              </li>
              <li className="flex items-center m-2 p-2 hover:bg-gray-200 text-sm rounded-full">
                <img
                  src="assets/sidebar/rightarrow.png"
                  alt="arrow"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <img
                  src="assets/sidebar/onlinecourse.png"
                  alt="dot"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>Online Courses</span>
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <span className="text-gray-500 text-m">Pages</span>
            <ul className="mt-2">
              <li className="flex items-center m-2 p-2 hover:bg-gray-200 text-sm rounded-full">
                <img
                  src="assets/sidebar/rightarrow.png"
                  alt="arrow"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <img
                  src="assets/sidebar/userprofile.png"
                  alt="arrow"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>User Profile</span>
              </li>
              <div className="ml-16">
                <li className="flex items-center m-2 p-2 hover:bg-gray-200 text-sm rounded-full">
                  <span>Overview</span>
                </li>
                <li className="flex items-center m-2 p-2 hover:bg-gray-200 text-sm rounded-full">
                  <span>Projects</span>
                </li>
                <li className="flex items-center m-2 p-2 hover:bg-gray-200 text-sm rounded-full">
                  <span>Campaigns</span>
                </li>
                <li className="flex items-center m-2 p-2 hover:bg-gray-200 text-sm rounded-full">
                  <span>Documents</span>
                </li>
                <li className="flex items-center m-2 p-2 hover:bg-gray-200 text-sm rounded-full">
                  <span>Followers</span>
                </li>
              </div>
              <li className="flex items-center m-2 p-2 hover:bg-gray-200 text-sm rounded-full">
                <img
                  src="assets/sidebar/rightarrow.png"
                  alt="arrow"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <img
                  src="assets/sidebar/account.png"
                  alt="arrow"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>Account</span>
              </li>
              <li className="flex items-center m-2 p-2 hover:bg-gray-200 text-sm rounded-full">
                <img
                  src="assets/sidebar/rightarrow.png"
                  alt="arrow"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <img
                  src="assets/sidebar/corporate.png"
                  alt="arrow"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>Corporate</span>
              </li>
              <li className="flex items-center m-2 p-2 hover:bg-gray-200 text-sm rounded-full">
                <img
                  src="assets/sidebar/rightarrow.png"
                  alt="arrow"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <img
                  src="assets/sidebar/blog.png"
                  alt="arrow"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>Blog</span>
              </li>
              <li className="flex items-center m-2 p-2 hover:bg-gray-200 text-sm rounded-full">
                <img
                  src="assets/sidebar/rightarrow.png"
                  alt="arrow"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <img
                  src="assets/sidebar/social.png"
                  alt="arrow"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>Social</span>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
