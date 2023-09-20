import React, { useEffect, useState } from "react";
import { fetchUserData } from "../auth/fetchUserData";
import { supabase } from "../supabaseClient";

export default function ArticleStatus() {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(null);
  const [audioFiles, setAudioFiles] = useState([]);
  const [transcriptions, setTranscriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetches UserData to retrieve Id
  useEffect(() => {
    async function fetchData() {
      const userData = await fetchUserData();
      if (userData) {
        setUser(userData);
      }
    }

    fetchData();
  }, []);

  // Gathers all transcriptions from userId
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
              const response = await fetch(
                `http://localhost:4005/api/playht/retrieveTranscription?transcriptionId=${transcription}`
              );

              if (!response.ok) {
                throw new Error("Network response was empty");
              }

              const responseData = await response.json();

              // Save responseData.input and responseData.output to localStorage
              localStorage.setItem(`audioFile${index}`, JSON.stringify({
                input: responseData.input,
                output: responseData.output,
              }));

              return {
                number: index + 1,
                data: responseData,
              };
            })
          );

          setAudioFiles(audioFiles);
          setIsLoading(false); // Set isLoading to false once audio files are fetched
        } catch (err) {
          console.error(err);
        }
      };

      fetchAudioFiles();
    }
  }, [user, transcriptions]);

  useEffect(() => {
    // This will be triggered when isLoading changes to false and audioFiles are available
    if (!isLoading && audioFiles.length > 0) {
      setStatus(
        <div>
          <h2>Audio Files</h2>
          <ul>
            {audioFiles.map((audioFile) => (
              <li key={audioFile.data.id}>
                <h3>{`Audio File ${audioFile.number}:`}</h3>
                <p>Text {audioFile.data.input.text}</p>
                <p>Voice: {audioFile.data.input.voice}</p>
                <p>URL: {audioFile.data.output.url}</p>
                <audio controls>
                  <source src={audioFile.data.output.url} type="audio/mpeg" />
                </audio>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }, [isLoading, audioFiles]);

  useEffect(() => {
    console.log("IM HERE TOS HOW IM WORKING", audioFiles)
  }, [audioFiles]);

  return (
    <div>
      {status ? (
        status
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
