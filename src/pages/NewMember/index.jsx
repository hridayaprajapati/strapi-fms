const AddNewMember = () => {
  return (
    <>
      <main className="flex flex-col items-center p-4">
        <h2 className="text-lg font-bold leading-7 text-gray-900">
          Add family member
        </h2>
        <form
          action="#"
          method="POST"
          className="mt-6 flex flex-col rounded-md border p-4 shadow-md sm:gap-y-6 sm:p-6"
        >
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:gap-x-10">
            <div className="flex flex-col gap-y-2 sm:w-1/2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-4 flex flex-col sm:mt-0 sm:w-1/2">
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="flex items-center gap-x-3">
                <div className="flex items-center gap-x-1">
                  <input
                    id="male"
                    name="gender"
                    type="radio"
                    required
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
                    name="gender"
                    type="radio"
                    required
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
                htmlFor="age"
                className="text-sm font-medium leading-6 text-gray-900"
              >
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-4 flex flex-col gap-y-2 sm:mt-0 sm:w-1/2">
              <label
                htmlFor="relation"
                className="text-sm font-medium leading-6 text-gray-900"
              >
                Relation
              </label>
              <input
                id="relation"
                name="relation"
                type="text"
                required
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
