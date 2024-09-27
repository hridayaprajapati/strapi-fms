import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { toast } from "sonner";

import { API_URL } from "../globalVariables";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [token, setToken] = useState(localStorage.getItem("site") || "");

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
    localStorage.setItem("site", token);
  }, [user, token]);

  const loginAction = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/auth/local`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = response.data;
      if (res.user) {
        setUser(res.user);
        setToken(res.jwt);
        localStorage.setItem("site", res.jwt);
        navigate("/");
        toast.success("Login successful");
        return;
      }
      throw new Error(res.message || "Login failed");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || err.message);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
