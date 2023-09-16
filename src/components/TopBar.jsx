import Nav from "react-bootstrap/Nav";
import sessionToken from "../auth/sessionToken";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import NavLink from "react-bootstrap/NavLink";
import { fetchUserData } from "../auth/fetchUserData";
import { useState, useEffect } from "react";


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
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Nav
            variant="tabs"
            defaultActiveKey="/home"
            className="bg-slate-900 fixed-top w-auto d-md-flex"
        >
            <Nav.Item>
                <Nav.Link className="text-white px-3 " href="/">
                    <h6>Ai voices</h6>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-white px-3" href="/TtsAiPage">
                    <h6>Generator</h6>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-white px-3" href="/CreditShop">
                    <h6>Credits</h6>
                </Nav.Link>
            </Nav.Item>
            {token ? (
                <>
                    {/*OffCanvas*/}
                    <Offcanvas
                        show={show}
                        onHide={handleClose}
                        className="me-2"
                        placement="end"
                    >
                        <Offcanvas.Header
                            closeButton
                            className="bg-slate-900 text-white"
                        >
                            <Offcanvas.Title>
                                {token.user.user_metadata.username}
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="bg-slate-900 text-white">
                            <NavLink href="/profile" className="px-4 py-3">
                                PROFILE
                            </NavLink>
                            <NavLink href="/settings" className="px-4 py-3">
                                SETTINGS
                            </NavLink>
                            <Button variant="danger" className="my-20 mx-4">
                                Log Out
                            </Button>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <Nav.Item className="ml-auto">
                        <Button
                            variant="text-white"
                            className=" bg-slate-900 mx-3 text-white"
                            onClick={handleShow}
                        >
                            {loggedUser ? loggedUser.user_metadata.username : ''}
                        </Button>
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
                        <Nav.Link
                            className="text-white px-4"
                            href="/SignUpPage"
                        >
                            sign up
                        </Nav.Link>
                    </Nav.Item>
                </>
            )}
        </Nav>
    );
}

export default TopBar;