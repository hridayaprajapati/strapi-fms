import { Link } from "react-router-dom";

const PageNotFound = ({ status }) => {
  return (
    <main className="grid h-full place-items-center bg-white px-6 py-24">
      <div className="text-center">
        <p className="text-base font-semibold text-blue-600" aria-hidden="true">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {status ? (
            <Link
              to="/"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white"
              aria-label="Go to Dashboard"
            >
              Go Dashboard
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-sm font-semibold text-gray-900"
              aria-label="Login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
