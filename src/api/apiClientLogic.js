import { supabase } from "../supabaseClient";
import { fetchUserData } from "../auth/fetchUserData";

async function apiClientLogic(voice, text, speed, title) {
  const userData = await fetchUserData();
  
  const loggedUser = userData ? userData.id : null;
  console.log("APICLIENTLOGIC", loggedUser)

  if (loggedUser) {
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

    try {
      const response = await fetch("https://play.ht/api/v1/convert/", options);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("Response data:", responseData);

      if (responseData && responseData.transcriptionId) {
        console.log("Transcription ID set:", responseData.transcriptionId);
        return {
          transcriptionId: responseData.transcriptionId,
          loggedUser: loggedUser,
        };
      } else {
        console.log("No transcriptionId found in response.");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return {
    transcriptionId: null,
    loggedUser: null,
  };
}

export default apiClientLogic;
