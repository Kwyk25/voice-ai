import Nav from "react-bootstrap/Nav";
import { Coin, Robot } from "react-bootstrap-icons";

function TopBar() {


    return (
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/">Ai voice</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/TtsAiPage"><Robot /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/CreditShop"><Coin /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/LoginPage">login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/SignUpPage">sign up</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default TopBar;
