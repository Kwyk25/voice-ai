import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Sponge from "../assets/images/sbsp.jpg";
import Elon from "../assets/images/Elon.jpg";
import Singer from "../assets/images/Singer.jpg";
import button from "../assets/images/Button.jpg";

function CardVoices() {
    return (
        <CardGroup className="mt-4 mb-5 px-">
            <Card className="bg-slate-900 border-0 mx-1">
                <Card.Img variant="top" src={Sponge} />
                <Card.Body className="bg-slate-900 text-white">
                    <Card.Title>SpongeBob SquarePants</Card.Title>
                </Card.Body>
            </Card>
            <Card className="bg-slate-900 text-white border-0 mx-1">
                <Card.Img variant="top" src={Elon} />
                <Card.Body className="bg-slate-900 text-white">
                    <Card.Title>Elon Musk</Card.Title>
                </Card.Body>
            </Card>
            <Card className="border-0 mx-1">
                <Card.Img variant="top" src={Singer} />
                <Card.Body className="bg-slate-900 text-white border-0 ">
                    <Card.Title>select singer</Card.Title>
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

export default CardVoices;
