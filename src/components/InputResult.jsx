import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import stock from "../assets/images/404.jpg";

function InputResult() {
    return (
        <Card style={{ width: "20rem" }} className="mx-auto ">
            <Card.Img variant="top" src={stock} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Download Speech</Button>
            </Card.Body>
        </Card>
    );
}

export default InputResult;
