import Nav from "react-bootstrap/Nav";

function TopBar() {
    return (
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/">logo here</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/CreditShop">Credits</Nav.Link>
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
