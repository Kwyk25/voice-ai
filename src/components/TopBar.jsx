import Nav from "react-bootstrap/Nav";
import { Coin, Robot } from "react-bootstrap-icons";
import sessionToken from "../auth/sessionToken";


function TopBar() {
  const token = sessionToken();
  


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
              {token.user.user_metadata.username}
              {/* DROP DOWN GOES HERE */}
            </Nav.Link>
          </Nav.Item>
        </>
      ) : (
        <>
          <Nav.Item className="ml-auto">
            <Nav.Link className="text-white px-4" href="/LoginPage">
              login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-white px-4" href="/SignUpPage">
              sign up
            </Nav.Link>
          </Nav.Item>
        </>
      )}
    </Nav>
  );
}

export default TopBar;
