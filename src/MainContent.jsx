import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/Register";
import FamilyInformationPage from "./pages/FamilyInfo";
import ChangePasswordPage from "./pages/ChangePassword";
import AddNewMember from "./pages/NewMember";
import ProfilePage from "./pages/Profile";

import Sidebar from "./components/Sidebar";

import PrivateRoute from "./router/route";
import { useAuth } from "./hooks/AuthProvider";
import Header from "./components/Header";

const MainContent = () => {
  const auth = useAuth();
  const [showHeader, setShowHeader] = useState(window.innerWidth >= 640);

  useEffect(() => {
    const handleResize = () => {
      setShowHeader(window.innerWidth >= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {auth.user && <Sidebar />}
      <div className="flex-1">
        {auth.user && showHeader && <Header />}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/change-password" element={<ChangePasswordPage />} />
            <Route path="/family-info" element={<FamilyInformationPage />} />
            <Route path="/family-info/new" element={<AddNewMember />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default MainContent;
