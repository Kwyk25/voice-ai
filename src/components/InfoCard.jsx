import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Coins from "../assets/images/Coins.jpg";
import Mic from "../assets/images/Mic.jpg";
import Singer from "../assets/images/Singer.jpg";
import button from "../assets/images/ButtonImg.jpg"

function InfoCard() {
    return (
        <CardGroup className="mt-4 mb-5 px-">
            <Card className="bg-slate-900 border-0 mx-1">
                <Card.Img variant="top" src={Coins} />
                <Card.Body className="bg-slate-900 text-white">
                    <Card.Title>purchase credits</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="bg-slate-900 text-white border-0 mx-1">
                <Card.Img variant="top" src={Mic} />
                <Card.Body className="bg-slate-900 text-white">
                    <Card.Title>select song</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in
                        to additional content.{" "}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="border-0 mx-1">
                <Card.Img variant="top" src={Singer} />
                <Card.Body className="bg-slate-900 text-white border-0 ">
                    <Card.Title>select singer</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="border-0 mx-1">
                <Card.Img variant="top" src={button} />
                <Card.Body className="bg-slate-900 text-white ">
                    <Card.Title>hit generate </Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}

export default InfoCard;
