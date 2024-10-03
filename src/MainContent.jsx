import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/Register";
import FamilyInformationPage from "./pages/FamilyInfo";
import AddNewMember from "./pages/NewMember";
import EditMemberInfo from "./pages/EditMemberInfo";
import ChangePasswordPage from "./pages/ChangePassword";
import ProfilePage from "./pages/Profile";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import PrivateRoute from "./router/PrivateRoute";
import { useAuth } from "./hooks/AuthProvider";

const MainContent = () => {
  const auth = useAuth();

  const isAuthenticated = auth.user ? true : false;

  return (
    <>
      <div className="flex min-h-screen flex-col">
        {auth.user && <Header />}

        <div className="flex flex-1">
          {auth.user && <Sidebar />}

          <div className="flex flex-1 flex-col">
            <main className="flex-1 overflow-auto">
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
                  <Route
                    path="/family-info/:documentId/edit"
                    element={<EditMemberInfo />}
                  />
                </Route>
                <Route
                  path="*"
                  element={<PageNotFound status={isAuthenticated} />}
                />
              </Routes>
            </main>

            {/* Footer aligned at the bottom of the page */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
