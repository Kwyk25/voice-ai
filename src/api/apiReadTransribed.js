import React, { useEffect, useState } from 'react';

export default function ArticleStatus() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const secretKey = '23a0f4c9b56a477f81c5eb818bd3add9';
        const userId = 'ZW486JewBCe84sFEYBdrGYKIJwg1';

        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: secretKey,
            'X-User-Id': userId,
          },
        };

        const response = await fetch('https://play.ht/api/v1/articleStatus?transcriptionId=3AVXxrAKWW0HlaOBCM', options);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        setStatus(responseData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

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



