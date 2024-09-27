import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { useAuth } from "../../hooks/AuthProvider";

const initialUser = {
  email: "",
  password: "",
  username: "",
};

const RegisterPage = () => {
  const [input, setInput] = useState(initialUser);
  const navigate = useNavigate();

  const auth = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:1337/api/auth/local/register`;
      if (input.username && input.email && input.password) {
        const response = await axios.post(url, input);
        if (response.status === 200) {
          toast.success("Registered successfully!");
          setInput(initialUser); // Reset form inputs
          navigate("/login");
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setInput((currentInput) => ({
      ...currentInput,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (auth.user) {
      navigate("/");
    }
  }, [auth.user, navigate]);

  return (
    <>
      <main className="h-full">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleRegister}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={input.username}
                    onChange={handleUserChange}
                    required
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={input.email}
                    onChange={handleUserChange}
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={input.password}
                    onChange={handleUserChange}
                    required
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Register
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already a member?{" "}
              <Link
                to="/login"
                className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterPage;
