import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Coins from "../assets/images/Coins.jpg";
import Mic from "../assets/images/Mic.jpg";

import button from "../assets/images/Button.jpg";

function CardVoices2() {
    return (
        <CardGroup className="mt-4 mb-5 px-">
            <Card className="bg-slate-900 border-0 mx-1">
                <Card.Img variant="top" src={Coins} />
                <Card.Body className="bg-slate-900 text-white">
                    <Card.Title>purchase credits</Card.Title>
                </Card.Body>
            </Card>
            <Card className="bg-slate-900 text-white border-0 mx-1">
                <Card.Img variant="top" src={Mic} />
                <Card.Body className="bg-slate-900 text-white">
                    <Card.Title>select song</Card.Title>
                </Card.Body>
            </Card>
           
            <Card className="border-0 mx-1">
                <Card.Img variant="top" src={button} />
                <Card.Body className="bg-slate-900 text-white ">
                    <Card.Title>hit generate </Card.Title>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}

export default CardVoices2;
