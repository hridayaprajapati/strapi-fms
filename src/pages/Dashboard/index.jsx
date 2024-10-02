import axios from "axios";
import { API_URL } from "../../globalVariables";
import { useAuth } from "../../hooks/AuthProvider";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const auth = useAuth();

  const [familyCount, setFamilyCount] = useState(0);
  const [error, setError] = useState(null);

  const getListMembers = async () => {
    try {
      const response = await axios.get(`${API_URL}/family-infos`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      setFamilyCount(response.data.data.length);
    } catch (error) {
      setError("Failed to fetch family members.");
      console.error(error);
    }
  };

  useEffect(() => {
    getListMembers();
  }, []);

  return (
    <main>
      <div className="mb-4 bg-blue-500 py-6 text-center text-4xl">
        Welcome {auth.user?.username}
      </div>
      <div className="w-fit rounded-2xl border bg-red-600 p-4">
        <h1 className="mb-2 text-xl font-bold">My Family</h1>
        {error ? (
          <p className="text-base text-red-500">{error}</p>
        ) : (
          <p className="text-base">Count: {familyCount}</p>
        )}
      </div>
    </main>
  );
};

export default DashboardPage;
