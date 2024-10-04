import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="flex h-screen w-48 flex-col bg-slate-900 text-white">
        <nav className="flex-1">
          <ul className="space-y-2 p-4">
            <li>
              <Link to="/" className="block rounded-lg p-2 hover:bg-gray-700">
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block rounded p-2 hover:bg-gray-700"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/change-password"
                className="block rounded p-2 hover:bg-gray-700"
              >
                Change Password
              </Link>
            </li>
            <li>
              <Link
                to="/family-info"
                className="block rounded p-2 hover:bg-gray-700"
              >
                My Family
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
