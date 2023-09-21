import Accordion from "react-bootstrap/Accordion";
import Default from "./DefaultPage";
import { useState } from "react";
import updateUser from "../auth/updateUser";

function Settings() {
  const [newUsername, setNewUsername] = useState("");

  function onUsernameChange(e) {
    setNewUsername(e.target.value);
    console.log(newUsername);
  }

  function handleSubmit() {
    updateUser(newUsername);
  }

  return (
    <Default>
      <div className="pt-5 text-white">
        <h2>Menu</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="bg-slate-950">
              Profile{" "}
            </Accordion.Header>
            <Accordion.Body className="bg-slate-950">
              <ul>
                <li>
                  <a href="/#">saved voices</a>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="bg-slate-950">
            <Accordion.Header className="bg-slate-950">
              Settings
            </Accordion.Header>
            <Accordion.Body className="bg-slate-950">
              <form>
                <h2>Edit Profile</h2>
                <label htmlFor="username" className="text-white">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={onUsernameChange} 
                  value={newUsername}
                />
                <button type="submit" onSubmit={handleSubmit} className="btn">
                  Save Changes
                </button>
              </form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="py-20"></div>
      <div className="py-20"></div>
      <div className="py-20"></div>
      <div className="py-20"></div>
      <div className="py-20"></div>
    </Default>
  );
}

export default Settings;
