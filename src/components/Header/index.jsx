import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthProvider";

const Header = () => {
  const navigate = useNavigate();

  const auth = useAuth();

  const handleLogOut = () => {
    auth.logOut();
    navigate("/login");
  };

  return (
    <>
      <Menu as="div" className="relative bg-slate-800 p-3">
        <div className="flex items-center justify-end gap-2">
          <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="h-8 w-8 rounded-full"
            />
          </MenuButton>
          <span className="text-md text-white">
            Welcome, {auth.user?.username}
          </span>
        </div>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <MenuItem>
            <button
              onClick={handleLogOut}
              className="block w-full px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
            >
              Sign out
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </>
  );
};

export default Header;
