import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { Toaster } from "sonner";

import "./App.css";

import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/Register";
import FamilyInformationPage from "./pages/FamilyInfo";
import ChangePasswordPage from "./pages/ChangePassword";
import AddNewMember from "./pages/NewMember";
import ProfilePage from "./pages/Profile";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import AuthProvider from "./hooks/AuthProvider";
import PrivateRoute from "./router/route";

function App() {
  const [showHeader, setShowHeader] = useState(window.innerWidth >= 640);

  useEffect(() => {
    const handleResize = () => {
      setShowHeader(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex h-screen flex-col sm:flex-row">
        <Toaster expand={true} richColors position="top-center" />
        <BrowserRouter>
          <AuthProvider>
            <Sidebar />
            <div className="flex-1">
              {showHeader && <Header />}
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route element={<PrivateRoute />}>
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route
                    path="/change-password"
                    element={<ChangePasswordPage />}
                  />
                  <Route
                    path="/family-info"
                    element={<FamilyInformationPage />}
                  />
                  <Route path="/family-info/new" element={<AddNewMember />} />
                </Route>
                <Route path="/*" element={<PageNotFound />} />
              </Routes>
            </div>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
