import { useEffect } from 'react';

function ApiClient({ voice, text, speed, title }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const secretKey = '23a0f4c9b56a477f81c5eb818bd3add9';
        const userId = 'ZW486JewBCe84sFEYBdrGYKIJwg1';

        const options = {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: secretKey,
            'X-User-Id': userId,
          },
          body: JSON.stringify({
            voice: voice,
            content: [text],
            speed: speed,
            title: title,
            preset: 'balanced',
          }),
        };

        const response = await fetch('https://play.ht/api/v1/convert/', options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log(responseData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return null; 
}

export default ApiClient;