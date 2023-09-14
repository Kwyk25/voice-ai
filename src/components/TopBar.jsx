import Nav from "react-bootstrap/Nav";
import { Coin, Robot } from "react-bootstrap-icons";
import LogOutBtn from "./LogOut";

function TopBar() {


    return (
        <Nav
            variant="tabs"
            defaultActiveKey="/home"
            className="bg-slate-900 fixed-top"
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
            <Nav.Item>
                <Nav.Link className="text-white px-4" href="/LoginPage">
                    login
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-white px-4" href="/SignUpPage">
                    sign up
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-white px-4">
                <LogOutBtn/>
            </Nav.Item>
        </Nav>
    );
}

export default TopBar;
