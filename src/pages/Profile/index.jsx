import { useAuth } from "../../hooks/AuthProvider";

const ProfilePage = () => {
  const auth = useAuth();
  return (
    <>
      <main className="p-6">
        <div className="px-4 sm:px-0">
          <h3 className="text-xl font-bold leading-7 text-gray-900">
            User Information
          </h3>
        </div>
        <div className="user-info flex flex-col items-center justify-around sm:flex-row">
          <div className="user-image">
            <img src="#" alt="user-image" className="h-16 w-16 rounded-full" />
          </div>
          <div>
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {auth.user.username}
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
