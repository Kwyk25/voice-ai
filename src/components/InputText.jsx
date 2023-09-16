import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function InputText() {
    return (
        <div>
            <h3 className="text-white">Generate your Ai</h3>
            <Form.Group className="mb-3">
                <Form.Label className="text-white"> input prompt</Form.Label>
                <Form.Control placeholder="Welcome to bobs burgers!" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="text-white">Select user</Form.Label>
                <Form.Select>
                    <option>-Select-</option>
                    <option>Noah</option>
                    <option>Ryan</option>
                    <option>Kyle</option>
                </Form.Select>
            </Form.Group>
            <Button>Generate Prompt</Button>
        </div>
    );
}

export default InputText;
