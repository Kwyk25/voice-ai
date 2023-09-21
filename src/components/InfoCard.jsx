import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Coins from "../assets/images/Coins.jpg";
import Mic from "../assets/images/Mic.jpg";
import Talker from "../assets/images/Taking.jpg";
import button from "../assets/images/Button.jpg"

function InfoCard() {
    return (
        <CardGroup className="mt-4 mb-5 px-">
            <Card className="bg-slate-900 border-0 mx-1">
                <Card.Img variant="top" src={Coins} />
                <Card.Body className="bg-slate-900 text-white">
                    <Card.Title className="py-2">Purchase Credits</Card.Title>
                    <Card.Text>
                        Purchasing credits will allow you to use the text-to-speech feature. 
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="bg-slate-900 text-white border-0 mx-1">
                <Card.Img variant="top" src={Mic} />
                <Card.Body className="bg-slate-900 text-white">
                    <Card.Title className="py-2">Add A Title With A Prompt</Card.Title>
                    <Card.Text>
                        By imputing a prompt into the text box, it will allow your text-to-speech voice say what you have written down.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="border-0 mx-1">
                <Card.Img variant="top" src={Talker} />
                <Card.Body className="bg-slate-900 text-white border-0 ">
                    <Card.Title className="py-2">Select A Voice</Card.Title>
                    <Card.Text>
                        Choose one of a 100+ voices Which you like with the given prompt.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="border-0 mx-1">
                <Card.Img variant="top" src={button} />
                <Card.Body className="bg-slate-900 text-white ">
                    <Card.Title className="py-2">Hit Generate Prompt</Card.Title>
                    <Card.Text>
                        Hit the generate prompt button and wait for us to make the magic!
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}

export default InfoCard;
