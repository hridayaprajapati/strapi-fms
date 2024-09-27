import { userData } from "../../helpers";

const familyCount = 5;

// import { userData } from "../../helpers";

const DashboardPage = () => {
  const { username } = userData();
  return (
    <main>
      <div className="mb-4 bg-blue-500 py-6 text-center text-4xl">
        Welcome {username}
      </div>
      <div className="w-fit rounded-2xl border bg-red-600 p-4">
        <h1 className="mb-2 text-xl font-bold">My Family</h1>
        <p className="text-base">Count: {familyCount}</p>
      </div>
    </main>
  );
};
export default DashboardPage;
