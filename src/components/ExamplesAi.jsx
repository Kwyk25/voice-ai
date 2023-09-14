import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { PlayCircleFill } from "react-bootstrap-icons";

export default function PlayBtn() {
    return (
        <ButtonGroup className='my-4'>
            <Button  href='#'><PlayCircleFill />Elon Musk</Button>
            <Button href='#'><PlayCircleFill />James Bond</Button>
            <Button href='#'><PlayCircleFill />Jimmy Falon</Button>
            <Button href='#'><PlayCircleFill />Bob the builder</Button>
        </ButtonGroup>
    )
}