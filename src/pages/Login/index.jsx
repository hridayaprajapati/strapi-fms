import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../../hooks/AuthProvider";
import { useState } from "react";

const LoginPage = () => {
  const [input, setInput] = useState({
    identifier: "",
    password: "",
  });

  const navigate = useNavigate();
  const auth = useAuth();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInput((currentInput) => ({
      ...currentInput,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (input.identifier && input.password) {
      try {
        await auth.loginAction(input);
        navigate("/");
      } catch (error) {
        toast.error("Login failed. Please check your credentials.");
      }
    } else {
      toast.warning("Please provide valid input.");
    }
  };

  return (
    <>
      <main className="h-full">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="identifier"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="identifier"
                    name="identifier"
                    type="email"
                    value={input.identifier}
                    onChange={handleChange}
                    required
                    autoComplete="email"
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
                    Password
                  </label>
                  <div className="text-sm">
                    <Link
                      to="/forgot-password"
                      className="font-semibold text-blue-600 hover:text-blue-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={input.password}
                    onChange={handleChange}
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
                  Log in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <Link
                to="/register"
                className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
