import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import sessionToken from "../auth/sessionToken";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import NavLink from "react-bootstrap/NavLink";
import LogOutBtn from "./LogOut";

function TopBar() {
    const token = sessionToken();
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
                                <LogOutBtn />
                            </Button>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <Nav.Item className="ml-auto">
                        <Button
                            variant="text-white"
                            className=" bg-slate-900 mx-3 text-white"
                            onClick={handleShow}
                        >
                            {token.user.user_metadata.username}
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
