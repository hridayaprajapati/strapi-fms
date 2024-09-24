import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const FamilyInformationPage = () => {
  return (
    <>
      <main className="m-4 flex flex-col items-center">
        <div className="container mb-4 flex flex-row items-center justify-between">
          <h1 className="text-bold text-base">Family Members</h1>
          <Link
            to="/family-info/new"
            className="flex flex-row items-center gap-2 rounded-lg bg-blue-600 p-2 text-base text-white"
          >
            Add member
          </Link>
        </div>
        <div className="container relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  S.N.
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center gap-1">
                    Name
                    <button>
                      <ChevronUpDownIcon className="h-4 w-auto" />
                    </button>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center gap-1">
                    Relation
                    <button>
                      <ChevronUpDownIcon className="h-4 w-auto" />
                    </button>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center gap-1">
                    Age
                    <button>
                      <ChevronUpDownIcon className="h-4 w-auto" />
                    </button>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center gap-1">
                    Gender
                    <button>
                      <ChevronUpDownIcon className="h-4 w-auto" />
                    </button>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="px-6 py-4">1</td>
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  Ram
                </th>
                <td className="px-6 py-4">Son</td>
                <td className="px-6 py-4">11</td>
                <td className="px-6 py-4">Male</td>
                <td className="flex flex-row gap-4 px-6 py-4">
                  <Link
                    to="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-red-600 hover:underline"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
              <tr className="border-b bg-white">
                <td className="px-6 py-4">2</td>
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  Shyam
                </th>
                <td className="px-6 py-4">Son</td>
                <td className="px-6 py-4">18</td>
                <td className="px-6 py-4">Male</td>
                <td className="flex flex-row gap-4 px-6 py-4">
                  <Link
                    to="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-red-600 hover:underline"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4">3</td>
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  Geeta
                </th>
                <td className="px-6 py-4">Daughter</td>
                <td className="px-6 py-4">20</td>
                <td className="px-6 py-4">Female</td>
                <td className="flex flex-row gap-4 px-6 py-4">
                  <Link
                    to="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-red-600 hover:underline"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default FamilyInformationPage;
