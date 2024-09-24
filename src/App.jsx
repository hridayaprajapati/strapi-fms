import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/Register";
import FamilyInformationPage from "./pages/FamilyInfo";
import ChangePasswordPage from "./pages/ChangePassword";
import AddNewMember from "./pages/NewMember";

function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
