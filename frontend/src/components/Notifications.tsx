import { FC } from "react";

interface NotificationProps {
  isNotificationOpen: boolean;
}

const Notifications: FC<NotificationProps> = ({ isNotificationOpen }) => {
  return (
    <aside
      className={`w-64 bg-white p-4 fixed lg:relative z-20 transition-transform transform border  border-white border-l-gray-200  ${
        isNotificationOpen
          ? "translate-x-0"
          : "-translate-x-full lg:translate-x-0"
      }`}
    >
      {" "}
      <h2 className="text-gray-800 text-m mr-3  mb-4">Notifications</h2>
      <ul className="mb-6">
        <li className="flex items-center mb-1  hover:bg-gray-200 rounded-full p-1">
          <img
            src="assets/notifications/bug.png"
            alt="theme"
            className="w-6 h-6 rounded-full mr-4 mb-2 hover:bg-gray-200"
          />
          <div className="flex flex-col m-0">
            <span className="text-m text-nowrap">You fixed a bug.</span>
            <span className="text-sm text-gray-500">Just now</span>
          </div>
        </li>
        <li className="flex items-center mb-1  hover:bg-gray-200 rounded-full p-1">
          <img
            src="assets/notifications/user.png"
            alt="theme"
            className="w-6 h-6 rounded-full mr-4 mb-4 hover:bg-gray-200"
          />
          <div className="flex flex-col m-0">
            <span className="text-m text-nowrap">New user registered.</span>
            <span className="text-sm text-gray-500">59 minutes ago</span>
          </div>
        </li>
        <li className="flex items-center mb-1  hover:bg-gray-200 rounded-full p-1">
          <img
            src="assets/notifications/bug.png"
            alt="theme"
            className="w-6 h-6 rounded-full mr-4 mb-4 hover:bg-gray-200"
          />
          <div className="flex flex-col m-0">
            <span className="text-m text-nowrap">You fixed a bug.</span>
            <span className="text-sm text-gray-500">12 hours ago</span>
          </div>
        </li>
        <li className="flex items-center mb-1  hover:bg-gray-200 rounded-full p-1">
          <img
            src="assets/notifications/boardcast.png"
            alt="theme"
            className="w-6 h-6 rounded-full mr-4 mb-4 hover:bg-gray-200"
          />
          <div className="flex flex-col m-0">
            <span className="text-m text-nowrap">
              Andi Lane subscribed to you.
            </span>
            <span className="text-sm text-gray-500">Today, 11:59 AM</span>
          </div>
        </li>
      </ul>
      <h2 className="text-gray-800 text-m mr-3  mb-4">Activities</h2>
      <ul className="mb-6">
        <li className="flex items-center mb-1 ">
          <img
            src="assets/notifications/a1.png"
            alt="theme"
            className="w-6 h-6 rounded-full mr-4 mb-2 hover:bg-gray-200"
          />
          <div className="flex flex-col m-0">
            <span className="text-m text-nowrap">Changed the style.</span>
            <span className="text-sm text-gray-500">Just now</span>
          </div>
        </li>
        <div className="inline-block h-[22px] min-h-[1em] w-0.5 ml-2   self-stretch bg-gray-200"></div>

        <li className="flex items-center mb-1 ">
          <img
            src="assets/notifications/a2.png"
            alt="theme"
            className="w-6 h-6 rounded-full mr-4 mb-2 hover:bg-gray-200"
          />
          <div className="flex flex-col m-0">
            <span className="text-m text-nowrap">Released a new version.</span>
            <span className="text-sm text-gray-500">59 minutes ago</span>
          </div>
        </li>
        <div className="inline-block h-[22px] min-h-[1em] w-0.5 ml-2   self-stretch bg-gray-200"></div>

        <li className="flex items-center mb-1 ">
          <img
            src="assets/notifications/a3.png"
            alt="theme"
            className="w-6 h-6 rounded-full mr-4 mb-2 hover:bg-gray-200"
          />
          <div className="flex flex-col m-0">
            <span className="text-m text-nowrap">Submitted a bug.</span>
            <span className="text-sm text-gray-500">12 hours ago</span>
          </div>
        </li>
        <div className="inline-block h-[22px] min-h-[1em] w-0.5 ml-2   self-stretch bg-gray-200"></div>

        <li className="flex items-center mb-1 ">
          <img
            src="assets/notifications/a4.png"
            alt="theme"
            className="w-6 h-6 rounded-full mr-4 mb-2 hover:bg-gray-200"
          />
          <div className="flex flex-col m-0">
            <span className="text-m text-nowrap">
              Modified A data in Page X.
            </span>
            <span className="text-sm text-gray-500">Today, 11:59 AM</span>
          </div>
        </li>
        <div className="inline-block h-[22px] min-h-[1em] w-0.5 ml-2   self-stretch bg-gray-200"></div>

        <li className="flex items-center mb-1 ">
          <img
            src="assets/notifications/a5.png"
            alt="theme"
            className="w-6 h-6 rounded-full mr-4 mb-2 hover:bg-gray-200"
          />
          <div className="flex flex-col m-0">
            <span className="text-m text-nowrap">
              Deleted a page in Project X.
            </span>
            <span className="text-sm text-gray-500">Feb 2, 2024</span>
          </div>
        </li>
      </ul>
      <h2 className="text-gray-800 text-m mr-3  mb-4">Contacts</h2>
      <ul>
        <li className="flex items-center mb-1  hover:bg-gray-200 rounded-full p-1">
          <img
            src="assets/notifications/users/IconSet.png"
            alt="theme"
            className="w-6 h-6 rounded-full mr-4 mb-2 hover:bg-gray-200"
          />
          <span className="text-m">Natali Craig</span>
        </li>
        <li className="flex items-center mb-1  hover:bg-gray-200 rounded-full p-1">
          <img
            src="assets/notifications/users/IconSet-1.png"
            alt="theme"
            className="w-6 h-6 rounded-full mr-4 mb-2 hover:bg-gray-200"
          />
          <span className="text-m">Drew Cano</span>
        </li>
        <li className="flex items-center mb-1  hover:bg-gray-200 rounded-full p-1">
          <img
            src="assets/notifications/users/IconSet-2.png"
            alt="theme"
            className="w-6 h-6 rounded-full mr-4 mb-2 hover:bg-gray-200"
          />
          <span className="text-m">Andi Lane</span>
        </li>
        <li className="flex items-center mb-1  hover:bg-gray-200 rounded-full p-1">
          <img
            src="assets/notifications/users/IconSet-3.png"
            alt="theme"
            className="w-6 h-6 rounded-full mr-4 mb-2 hover:bg-gray-200"
          />
          <span className="text-m">Koray Okumus</span>
        </li>
        <li className="flex items-center mb-1  hover:bg-gray-200 rounded-full p-1">
          <img
            src="assets/notifications/users/IconSet-4.png"
            alt="theme"
            className="w-6 h-6 rounded-full mr-4 mb-2 hover:bg-gray-200"
          />
          <span className="text-m">Kate Morrison</span>
        </li>
        <li className="flex items-center mb-1  hover:bg-gray-200 rounded-full p-1">
          <img
            src="assets/notifications/users/IconSet-5.png"
            alt="theme"
            className="w-6 h-6 rounded-full mr-4 mb-2 hover:bg-gray-200"
          />
          <span className="text-m">Melody Macy</span>
        </li>
      </ul>
    </aside>
  );
};

export default Notifications;
