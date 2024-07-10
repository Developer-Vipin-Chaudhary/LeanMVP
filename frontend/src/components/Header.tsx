import { FC } from "react";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  setisNotificationOpen: (isOpen: boolean) => void;
  isNotificationOpen: boolean;
}

const Header: FC<HeaderProps> = ({
  setIsSidebarOpen,
  isSidebarOpen,
  setisNotificationOpen,
  isNotificationOpen,
}) => {
  return (
    <header className="flex flex-wrap items-center justify-between mb-6 border-b border-gray-200 p-4">
      <div className="flex items-center flex-wrap">
        <img
          src="assets/header/dashboard.png"
          alt="dashboard"
          className="w-8 h-8 rounded-full mr-2 hover:bg-gray-200"
        />
        <img
          src="assets/header/star.png"
          alt="star"
          className="w-8 h-8 rounded-full mr-2 hover:bg-gray-200"
        />
        <span className="text-gray-400 text-sm mx-2 sm:mx-4">Dashboards</span>
        <span className="text-gray-400 text-sm mx-2 sm:mx-4">/</span>
        <span className="text-gray-800 text-sm mx-2 sm:mx-4">Default</span>
      </div>

      <div className="flex items-center flex-wrap">
        <button
          className="lg:hidden text-gray-500 mr-4"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="flex items-center p-2 mr-4 bg-gray-200 rounded-md text-sm">
          <img
            src="assets/header/search.png"
            alt="search"
            className="w-4 h-4 mr-2"
          />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 outline-none"
          />
          <img
            src="assets/header/shortcut.png"
            alt="shortcut"
            className="w-4 h-4 ml-2"
          />
        </div>
        <img
          src="assets/header/theme.png"
          alt="theme"
          className="w-4 h-4 rounded-full mr-4 hover:bg-gray-200"
        />
        <img
          src="assets/header/clock.png"
          alt="clock"
          className="w-4 h-4 rounded-full mr-4 hover:bg-gray-200"
        />
        <button
          className="text-gray-500 mr-4"
          onClick={() => setisNotificationOpen(!isNotificationOpen)}
        >
          <img
            src="assets/header/bell.png"
            alt="bell"
            className="w-4 h-4 rounded-full hover:bg-gray-200"
          />
        </button>
        <img
          src="assets/header/dashboard.png"
          alt="profile"
          className="w-6 h-6 rounded-full hover:bg-gray-200"
        />
      </div>
    </header>
  );
};

export default Header;
