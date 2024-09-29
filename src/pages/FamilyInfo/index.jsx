import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/AuthProvider";
import { API_URL } from "../../globalVariables";

const FamilyInformationPage = () => {
  const [listMembers, setListMembers] = useState([]);
  const auth = useAuth();

  const getListMembers = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/family-infos`,
      headers: {
        Authorization: `${auth.jwt}`,
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
        getListMembers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              {listMembers.map((item, idx) => {
                return (
                  <tr key={idx} className="border-b bg-white">
                    <td className="px-6 py-4">{idx + 1}</td>
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
                        to="#"
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
      </main>
    </>
  );
};

export default FamilyInformationPage;
