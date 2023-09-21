import { useEffect, useState } from "react";

export default function ListCustomeVoices() {
  const [customVoices, setCustomVoices] = useState(null)

  async function getCustomVoices() {
    try {
      const response = await fetch(
        "http://localhost:4005/api/playht/listCustomVoice"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setCustomVoices(data);
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  }

  useEffect(() => {
    getCustomVoices();
  }, []);

  useEffect(() => {
    console.log(customVoices)
  },[customVoices])

  return null;
}
