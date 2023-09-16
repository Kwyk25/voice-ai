import React, { useEffect, useState } from "react";
import { fetchUserData } from "../auth/fetchUserData";


export default function ArticleStatus() {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const userData = await fetchUserData();
      if (userData) {
        setUser(userData);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if(user){
    const fetchData = async () => {
      try {
        const secretKey = process.env.REACT_APP_PLAYHT_API_KEY;
        const userId = process.env.REACT_APP_PLAYHT_API_ID;

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: secretKey,
            "X-User-Id": userId,
          },
        };

        const response = await fetch(
          "https://play.ht/api/v1/articleStatus?transcriptionId=3AVXxrAKWW0HlaOBCM",
          options
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        setStatus(responseData);
        console.log(user)
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }
  }, [user]);

  return (
    <div>
      {status ? (
        <div>
          <h2>Article Status</h2>
          <pre>{JSON.stringify(status, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
