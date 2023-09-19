import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function PriceTiers() {
    return (
        <CardGroup>
            <Card>
                <Card.Body>
                    <Card.Title>Free</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                    $0/month
                    </small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Basic</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in
                        to additional content.{" "}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                    $15/month
                    </small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Pro</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        $40/month
                    </small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}

export default PriceTiers;
