import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

function InputText() {
  const [voices, setVoices] = useState(null);
  
  async function getVoices() {
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

      const response = await fetch("https://play.ht/api/v1/getVoices", options);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      setVoices(responseData);
      console.log(responseData);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getVoices();
  }, []);

  return (
    <div>
      <h3 className="text-white">Generate your Ai</h3>
      <Form.Group className="mb-3">
        <Form.Label className="text-white"> Title</Form.Label>
        <Form.Control placeholder="Im Your Audio Title" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="text-white"> input prompt</Form.Label>
        <Form.Control as="textarea" rows={10} placeholder="Welcome to bobs burgers!" />
      </Form.Group>
      <Button>Generate Prompt</Button>
    </div>
  );
}

export default InputText;
