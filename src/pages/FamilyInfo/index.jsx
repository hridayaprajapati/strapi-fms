import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/AuthProvider";
import { API_URL } from "../../globalVariables";
import { toast } from "sonner";

const FamilyInformationPage = () => {
  const [listMembers, setListMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const pageSize = 10;

  const auth = useAuth();

  const getTotalItems = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/family-infos`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        setTotalItems(response.data.meta.pagination.total);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getListMembers = async (page = currentPage) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/family-infos?pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        setListMembers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getListMembers();
    getTotalItems();
  }, []);

  const deleteMember = (documentId) => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${API_URL}/family-infos/${documentId}`,
    };

    axios
      .request(config)
      .then(() => {
        toast.error("Member deleted successfully");
        getListMembers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      getListMembers(currentPage - 1);
    }
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    getListMembers(currentPage + 1);
  };

  return (
    <>
      <main className="m-4 flex flex-col items-center">
        <div className="container mb-4 flex flex-row items-center justify-between">
          <h1 className="text-base font-bold">Family Members</h1>
          <Link
            to="/family-info/new"
            className="flex flex-row items-center gap-2 rounded-lg bg-blue-600 p-2 text-base text-white"
          >
            Add member
          </Link>
        </div>
        <div className="container relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="max-h-[570px] w-full text-left text-sm text-gray-500">
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
              {listMembers.map((item, idx) => {
                return (
                  <tr key={idx} className="border-b bg-white">
                    <td className="px-6 py-4">
                      {(currentPage - 1) * pageSize + (idx + 1)}
                    </td>
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                    >
                      {item.familyMemberName}
                    </th>
                    <td className="px-6 py-4">{item.familyMemberRelation}</td>
                    <td className="px-6 py-4">{item.familyMemberAge}</td>
                    <td className="px-6 py-4 capitalize">
                      {item.familyMemberGender}
                    </td>
                    <td className="flex flex-row gap-4 px-6 py-4">
                      <Link
                        to={`/family-info/${item.documentId}/edit`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Edit
                      </Link>
                      <Link
                        to="#"
                        onClick={() => deleteMember(item.documentId)}
                        className="font-medium text-red-600 hover:underline"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <nav className="container flex w-full items-center justify-between pt-4">
          <span className="mb-4 flex justify-between text-sm font-normal text-gray-500">
            Showing{" "}
            <span className="mx-1 font-semibold text-gray-900">
              {(currentPage - 1) * pageSize + 1}
            </span>
            -
            <span className="mx-1 font-semibold text-gray-900">
              {totalItems}
            </span>{" "}
            of
            <span className="mx-1 font-semibold text-gray-900">
              {totalItems}
            </span>
          </span>

          <ul className="inline-flex h-8 -space-x-px bg-white text-sm text-gray-500">
            <li>
              <button
                onClick={handlePrevious}
                className={`${
                  currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                } h-8 items-center justify-center rounded-s-lg border border-gray-300 px-3 hover:bg-gray-100`}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            <li>
              <button
                onClick={handleNext}
                className="h-8 items-center justify-center rounded-e-lg border border-gray-300 px-3 hover:bg-gray-100"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
};

export default FamilyInformationPage;
