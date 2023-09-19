import { useEffect } from "react";

export default function ListCustomeVoices() {
  const secretKey = process.env.REACT_APP_PLAYHT_API_KEY;
  const userId = process.env.REACT_APP_PLAYHT_API_ID;

  function getList(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          AUTHORIZATION: process.env.REACT_APP_PLAYHT_API_KEY,
          'X-USER-ID': process.env.REACT_APP_PLAYHT_API_ID
        }
      };
      
      fetch('https://play.ht/api/v2/cloned-voices', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

useEffect(() => {
    getList()
})

  return null;
}
