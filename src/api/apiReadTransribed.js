import React, { useEffect, useState } from "react";
import { fetchUserData } from "../auth/fetchUserData";
import { supabase } from "../supabaseClient";

export default function ArticleStatus() {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(null);
  const [audioFiles, setAudioFiles] = useState([])
  const [transcriptions, setTranscriptions] = useState([])

  //Fetches UserData to retrieve Id
  useEffect(() => {
    async function fetchData() {
      const userData = await fetchUserData();
      if (userData) {
        setUser(userData);
      }
    }

    fetchData();
  }, []);

  //gathers all transcriptions from userId
  useEffect(() => {
    if (user) {
      const fetchTranscriptions = async () => {
        try {
          const { data, error } = await supabase
            .from("Transcription")
            .select("newTranscription")
            .eq("userId", user.id);

          if (error) {
            throw new Error("Error fetching transcriptions:", error.message);
          }

          if (data && data.length > 0) {
            const newTranscriptions = data.map(
              (entry) => entry.newTranscription
            );
            setTranscriptions(newTranscriptions);
          }
        } catch (err) {
          console.error(err);
        }
      };

      fetchTranscriptions();
    }
  }, [user]);

  useEffect(() => {
    if (user && transcriptions.length > 0) {
      const fetchAudioFiles = async () => {
        try {
          const secretKey = process.env.REACT_APP_PLAYHT_API_KEY;
          const userId = process.env.REACT_APP_PLAYHT_API_ID;

          const audioFiles = await Promise.all(
            transcriptions.map(async (transcription, index) => {
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
                `https://play.ht/api/v1/articleStatus?transcriptionId=${transcription}`,
                options
              );

              if (!response.ok) {
                throw new Error("Network response was not ok");
              }

              const responseData = await response.json();
              const audioUrl = responseData.audioUrl;

              // Save audioUrl to local storage
              localStorage.setItem(`audioUrl${index}`, audioUrl);
              return {
                number: index + 1,
                data: responseData, // Add other data you need here
              };
            })
          );

          setAudioFiles(audioFiles);
        } catch (err) {
          console.error(err);
        }
      };

      fetchAudioFiles();
    }
  }, [user, transcriptions]);

  console.log(transcriptions);
  console.log(audioFiles)
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
      <div>
        <h2>Audio Files</h2>
        <ul>
          {audioFiles.map((audioFile) => (
            <li key={audioFile.number}>
              {`Audio File ${audioFile.number}:`}
              <audio controls>
                <source src={localStorage.getItem(`audioUrl${audioFile.number - 1}`)} type="audio/mpeg" />
              </audio>
            </li>
          ))}
        </ul>
      </div>
    </div>
    );
}
