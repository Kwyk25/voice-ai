import Accordion from "react-bootstrap/Accordion";
import Default from "./DefaultPage";

function Settings() {
    return (
        <Default>
            <div className="pt-5 text-white">
                <h2>Menu</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="bg-slate-950">Profile </Accordion.Header>
                        <Accordion.Body className="bg-slate-950">
                        <ul>
                                <li><a href="/#">saved voices</a></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="bg-slate-950">
                        <Accordion.Header className="bg-slate-950">Settings</Accordion.Header>
                        <Accordion.Body className="bg-slate-950">
                            <ul>
                                <li><a href="/#">Edit Profile</a></li>
                                
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="py-20"></div>
            <div className="py-20"></div>
            <div className="py-20"></div>
            <div className="py-20"></div>
            <div className="py-20"></div>
        </Default>
    );
}

export default Settings;
