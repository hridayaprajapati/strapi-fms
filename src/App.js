import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
