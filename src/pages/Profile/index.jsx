import { useAuth } from "../../hooks/AuthProvider";

const ProfilePage = () => {
  const auth = useAuth();
  return (
    <>
      <main className="mt-5 p-6">
        <div className="mb-5 px-4 sm:px-0">
          <h3 className="text-xl font-bold leading-7 text-gray-900">
            User Information
          </h3>
        </div>
        <div className="user-info flex flex-col items-center justify-around gap-4 sm:flex-row">
          <div className="user-image">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="user-image"
              className="rounded-full"
            />
          </div>
          <div>
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {auth.user.fullname}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Username
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {auth.user.username}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Email
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {auth.user.email}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
