import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../Header";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="flex">
        <div
          id="bdSidebar"
          className={`flex w-48 flex-col space-y-4 bg-slate-800 p-3 text-white ${
            isSidebarOpen
              ? "fixed inset-0 z-10 w-64"
              : "hidden md:relative md:flex"
          }`}
        >
          <Link to="#" className="navbar-brand mb-3">
            <img src="#!" alt="LOGO" className="h-8 w-auto" />
          </Link>
          <hr className="mb-3 border-white" />
          <div className="flex flex-col">
            <Link
              className="rounded-md p-4 text-base hover:bg-slate-900"
              to="/"
              onClick={handleLinkClick}
            >
              Dashboard
            </Link>
            <Link
              className="rounded-md p-4 text-base hover:bg-slate-900"
              to="/profile"
              onClick={handleLinkClick}
            >
              My Profile
            </Link>
            <Link
              className="rounded-md p-4 text-base hover:bg-slate-900"
              to="/change-password"
              onClick={handleLinkClick}
            >
              Change password
            </Link>
            <Link
              className="rounded-md p-4 text-base hover:bg-slate-900"
              to="/family-info"
              onClick={handleLinkClick}
            >
              My Family
            </Link>
          </div>
        </div>

        <div className="flex-1 bg-gray-100">
          <div className="flex items-center justify-between bg-slate-800 p-2 text-white md:hidden">
            <button
              className="text-white"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Bars3Icon className="h-8 w-auto" />
            </button>
            <img src="#!" alt="LOGO" className="h-8 w-auto" />
            <Header />
          </div>
        </div>
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-0 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </>
  );
};
export default Sidebar;
