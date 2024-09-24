import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react"; // Import useState and useEffect

import "./App.css";

import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/Register";
import FamilyInformationPage from "./pages/FamilyInfo";
import ChangePasswordPage from "./pages/ChangePassword";
import AddNewMember from "./pages/NewMember";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  const [showHeader, setShowHeader] = useState(window.innerWidth >= 640);

  const handleResize = () => {
    setShowHeader(window.innerWidth >= 640);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex h-screen flex-col sm:flex-row">
        <BrowserRouter>
          <Sidebar />
          <div className="flex-1">
            {showHeader && <Header />}
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/change-password" element={<ChangePasswordPage />} />
              <Route path="/" element={<DashboardPage />} />
              <Route path="family-info" element={<FamilyInformationPage />} />
              <Route path="family-info/new" element={<AddNewMember />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
