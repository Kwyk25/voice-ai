import Nav from "react-bootstrap/Nav";
import { Coin, Robot } from "react-bootstrap-icons";
import sessionToken from "../auth/sessionToken";
import { fetchUserData } from "../auth/fetchUserData";
import { useState,useEffect } from "react";


function TopBar() {
  const [loggedUser, setLoggedUser] = useState(null)
  const token = sessionToken();

  useEffect(() => {
    async function fetchData() {
      const userData = await fetchUserData();
      if (userData) {
        setLoggedUser(userData);
      }
    }

    fetchData();
  }, []);

  if(loggedUser) {
    console.log(loggedUser.user_metadata.username)
  }

  return (
    <Nav
      variant="tabs"
      defaultActiveKey="/home"
      className="bg-slate-900 fixed-top w-auto d-md-flex"
    >
      <Nav.Item>
        <Nav.Link className="text-white px-4" href="/">
          Ai voice
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-white px-4" href="/TtsAiPage">
          <Robot />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-white px-4" href="/CreditShop">
          <Coin />
        </Nav.Link>
      </Nav.Item>
      {token ? (
        <>
          <Nav.Item className="ml-auto">
            <Nav.Link className="text-white px-4" href="/ProfilePage">
              {loggedUser ? loggedUser.user_metadata.username : ''}
              {/* DROP DOWN GOES HERE */}
            </Nav.Link>
          </Nav.Item>
        </>
      ) : (
        <>
          <Nav.Item className="ml-auto">
            <Nav.Link className="text-white px-4" href="/LoginPage">
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-white px-4" href="/SignUpPage">
              Sign up
            </Nav.Link>
          </Nav.Item>
        </>
      )}
    </Nav>
  );
}

export default TopBar;
