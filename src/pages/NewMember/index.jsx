import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../globalVariables";
import { toast } from "sonner";
import { useAuth } from "../../hooks/AuthProvider";

const AddNewMember = () => {
  const [formData, setFormData] = useState({
    familyMemberName: "",
    familyMemberRelation: "",
    familyMemberAge: "",
    familyMemberGender: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      data: {
        familyMemberName: formData.familyMemberName,
        familyMemberAge: formData.familyMemberAge,
        familyMemberRelation: formData.familyMemberRelation,
        familyMemberGender: formData.familyMemberGender,
      },
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${API_URL}/family-infos`,
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
        toast.success("Family member added successfully");
        navigate("/family-info");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <main className="flex flex-col items-center p-4">
        <h2 className="text-lg font-bold leading-7 text-gray-900">
          Add family member
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col rounded-md border p-4 shadow-md sm:gap-y-6 sm:p-6"
        >
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:gap-x-10">
            <div className="flex flex-col gap-y-2 sm:w-1/2">
              <label
                htmlFor="familyMemberName"
                className="text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <input
                id="familyMemberName"
                name="familyMemberName"
                type="text"
                required
                value={formData.familyMemberName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-4 flex flex-col sm:mt-0 sm:w-1/2">
              <label
                htmlFor="familyMemberGender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="flex items-center gap-x-3">
                <div className="flex items-center gap-x-1">
                  <input
                    id="male"
                    name="familyMemberGender"
                    type="radio"
                    required
                    value="male"
                    checked={formData.familyMemberGender === "male"}
                    onChange={handleChange}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                  <label
                    htmlFor="male"
                    className="text-sm font-medium leading-6 text-gray-900"
                  >
                    Male
                  </label>
                </div>
                <div className="flex items-center gap-x-1">
                  <input
                    id="female"
                    name="familyMemberGender"
                    type="radio"
                    required
                    value="female"
                    checked={formData.familyMemberGender === "female"}
                    onChange={handleChange}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                  <label
                    htmlFor="female"
                    className="text-sm font-medium leading-6 text-gray-900"
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-col sm:mt-4 sm:flex-row sm:gap-x-10">
            <div className="flex flex-col gap-y-2 sm:w-1/2">
              <label
                htmlFor="familyMemberAge"
                className="text-sm font-medium leading-6 text-gray-900"
              >
                Age
              </label>
              <input
                id="familyMemberAge"
                name="familyMemberAge"
                type="number"
                required
                value={formData.familyMemberAge}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-4 flex flex-col gap-y-2 sm:mt-0 sm:w-1/2">
              <label
                htmlFor="familyMemberRelation"
                className="text-sm font-medium leading-6 text-gray-900"
              >
                Relation
              </label>
              <input
                id="familyMemberRelation"
                name="familyMemberRelation"
                type="text"
                required
                value={formData.familyMemberRelation}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700 sm:mt-0"
          >
            Add new member
          </button>
        </form>
      </main>
    </>
  );
};

export default AddNewMember;
