import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { fetchUserData } from "../auth/fetchUserData";

async function ApiClient({ voice, text, speed, title }) {
  const [transcriptionId, setTranscriptionId] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const userData = await fetchUserData();
      if (userData) {
        setLoggedUser(userData.id);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function insertData() {
      try {
        if (transcriptionId !== null) {
          const { data, error } = await supabase
            .from("Transcription")
            .upsert([
              {
                newTranscription: transcriptionId,
                userId: loggedUser,
              },
            ])
            .select();

          if (error) {
            console.error("Error inserting data:", error.message);
          } else {
            console.log("Data inserted successfully:", data);
          }
        }
      } catch (err) {
        console.error("An error occurred during data insertion:", err);
      }
    }

    if (loggedUser && transcriptionId !== null) {
      insertData();
    }
  }, [loggedUser, transcriptionId]);

  useEffect(() => {
    if (loggedUser) {
      const fetchData = async () => {
        try {
          const secretKey = process.env.REACT_APP_PLAYHT_API_KEY;
          const userId = process.env.REACT_APP_PLAYHT_API_ID;

          const options = {
            method: "POST",
            headers: {
              accept: "application/json",
              "content-type": "application/json",
              Authorization: secretKey,
              "X-User-Id": userId,
            },
            body: JSON.stringify({
              voice: voice,
              content: [text],
              speed: speed,
              title: title,
              preset: "balanced",
            }),
          };

          const response = await fetch(
            "https://play.ht/api/v1/convert/",
            options
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const responseData = await response.json();
          console.log("Response data:", responseData);
          

          if (responseData && responseData.transcriptionId) {
            console.log("Transcription ID set:", responseData.transcriptionId);
            setTranscriptionId(responseData.transcriptionId);
          } else {
            console.log("No transcriptionId found in response.");
          }
        } catch (err) {
          console.error(err);
        }
      };

      fetchData();
    }
  }, [loggedUser]);

  return null;
}

export default ApiClient;
