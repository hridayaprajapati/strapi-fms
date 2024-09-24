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
        <div class="container relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-left text-sm text-gray-500">
            <thead class="bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th scope="col" class="px-6 py-3">
                  S.N.
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center gap-1">
                    Name
                    <button>
                      <ChevronUpDownIcon className="h-4 w-auto" />
                    </button>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center gap-1">
                    Relation
                    <button>
                      <ChevronUpDownIcon className="h-4 w-auto" />
                    </button>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center gap-1">
                    Age
                    <button>
                      <ChevronUpDownIcon className="h-4 w-auto" />
                    </button>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center gap-1">
                    Gender
                    <button>
                      <ChevronUpDownIcon className="h-4 w-auto" />
                    </button>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b bg-white">
                <td class="px-6 py-4">1</td>
                <th
                  scope="row"
                  class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  Ram
                </th>
                <td class="px-6 py-4">Son</td>
                <td class="px-6 py-4">11</td>
                <td class="px-6 py-4">Male</td>
                <td class="flex flex-row gap-4 px-6 py-4">
                  <Link
                    to="#"
                    class="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <Link to="#" class="font-medium text-red-600 hover:underline">
                    Delete
                  </Link>
                </td>
              </tr>
              <tr class="border-b bg-white">
                <td class="px-6 py-4">2</td>
                <th
                  scope="row"
                  class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  Shyam
                </th>
                <td class="px-6 py-4">Son</td>
                <td class="px-6 py-4">18</td>
                <td class="px-6 py-4">Male</td>
                <td class="flex flex-row gap-4 px-6 py-4">
                  <Link
                    to="#"
                    class="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <Link to="#" class="font-medium text-red-600 hover:underline">
                    Delete
                  </Link>
                </td>
              </tr>
              <tr class="bg-white">
                <td class="px-6 py-4">3</td>
                <th
                  scope="row"
                  class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  Geeta
                </th>
                <td class="px-6 py-4">Daughter</td>
                <td class="px-6 py-4">20</td>
                <td class="px-6 py-4">Female</td>
                <td class="flex flex-row gap-4 px-6 py-4">
                  <Link
                    to="#"
                    class="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <Link to="#" class="font-medium text-red-600 hover:underline">
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
