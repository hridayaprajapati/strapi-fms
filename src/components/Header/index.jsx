import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useAuth } from "../../hooks/AuthProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    auth.logOut();
    navigate("/login");
  };

  console.log(auth);

  return (
    <>
      <nav className="flex justify-between bg-slate-900 px-3 py-2">
        <img src="#!" alt="Logo" />
        <div>
          <Menu as="div" className="relative">
            <MenuButton className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Avatar"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-white">Welcome, {auth.user.fullname}</span>
            </MenuButton>
            <MenuItems className="absolute mt-2 w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-1">
                <MenuItem>
                  <button
                    onClick={handleLogOut}
                    className="flex items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-gray-100"
                  >
                    Log out
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </nav>
    </>
  );
};

export default Header;
