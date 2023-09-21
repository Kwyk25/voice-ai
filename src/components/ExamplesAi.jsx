import Button from "react-bootstrap/Button";
import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { PlayCircleFill } from "react-bootstrap-icons";
import { Link as RouterLink } from "react-router-dom";

let aTest = new Audio(
    "https://peregrine-results.s3.amazonaws.com/pigeon/wQ6ZI6ZFU9msO8Kn4B_0.wav"
);
const pTest = () => {
    aTest.play();
};

let aTest2 = new Audio(
    "https://peregrine-results.s3.amazonaws.com/pigeon/vucxbibY2u74vRnzNn_0.wav"
);
const pTest2 = () => {
    aTest2.play();
};

let aTest3 = new Audio(
    "https://peregrine-results.s3.amazonaws.com/pigeon/Qoj88rlnJF2nJ7qzvr_0.wav"
);
const pTest3 = () => {
    aTest3.play();
};

let aTest4 = new Audio(
    "https://peregrine-results.s3.amazonaws.com/pigeon/ztigCDV9cHgBxgw5AB_0.wav"
);
const pTest4 = () => {
    aTest4.play();
};

export default function PlayBtn() {
    return (
        <ButtonGroup className="my-4">
            <Button component={RouterLink} onClick={pTest()}>
                <PlayCircleFill /> Evan Howard
            </Button>
            <Button onClick={pTest2()}>
                <PlayCircleFill />
                Elon Musk
            </Button>
            <Button onClick={pTest3()}>
                <PlayCircleFill />
                Barack Obama
            </Button>

            <Button onClick={pTest4()}>
                <PlayCircleFill />
                Donald Trump
            </Button>
        </ButtonGroup>
    );
}
