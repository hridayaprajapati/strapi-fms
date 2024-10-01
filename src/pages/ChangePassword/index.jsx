import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthProvider";
import { API_URL } from "../../globalVariables";
import axios from "axios";
import { toast } from "sonner";

const ChangePasswordPage = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogOut = () => {
    auth.logOut();
    navigate("/login");
  };

  const [formData, setFormData] = useState({
    currentPassword: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const cancelChangePassword = () => {
    return navigate("/dashboard");
  };

  const changePasswordHandle = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      currentPassword: formData.currentPassword,
      password: formData.password,
      passwordConfirmation: formData.passwordConfirmation,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${API_URL}/auth/change-password`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("Password changed successfully.");
        handleLogOut();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <main>
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="mb-4 text-center text-3xl font-bold">
              Change Password
            </p>
            <form onSubmit={changePasswordHandle} className="space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="currentPassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Current Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    New Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="passwordConfirmation"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    type="password"
                    value={formData.passwordConfirmation}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex flex-row items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={cancelChangePassword}
                  className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChangePasswordPage;
