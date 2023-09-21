import React, { useEffect, useState } from "react";
import { fetchUserData } from "../auth/fetchUserData";
import { supabase } from "../supabaseClient";

export default function ArticleStatus() {
  const [user, setUser] = useState(null);
  const [audioFiles, setAudioFiles] = useState([]);
  const [transcriptions, setTranscriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
          const audioFiles = await Promise.all(
            transcriptions.map(async (transcription, index) => {
              let responseData = null;

              // Retry until the output is available
              while (responseData === null) {
                const response = await fetch(
                  `http://localhost:4005/api/playht/retrieveTranscription?transcriptionId=${transcription}`
                );

                if (!response.ok) {
                  throw new Error("Network response was empty");
                }

                responseData = await response.json();
              }

              // Once the output is available, save it to local storage
              const localStorageKey = `audioFile${index}`;
              const localStorageData = {
                input: responseData.input,
                output: responseData.output,
              };

              // Use a try-catch block to handle local storage errors
              try {
                localStorage.setItem(
                  localStorageKey,
                  JSON.stringify(localStorageData)
                );
              } catch (localStorageError) {
                console.error(
                  "Error saving to local storage:",
                  localStorageError
                );
              }

              return {
                number: index + 1,
                data: responseData,
              };
            })
          );

          setAudioFiles(audioFiles);
          setIsLoading(false);

          // Redirect to /savedAudioPage once the logic is completed
          window.location.href = "/savedAudioPage";
        } catch (err) {
          console.error(err);
        }
      };
      setTimeout(fetchAudioFiles, 7500);
    }
  }, [user, transcriptions]);


  return (
    <div>
      {isLoading ? <p>Loading...</p> : null}
    </div>
  );
}
