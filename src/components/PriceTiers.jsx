import Button from "react-bootstrap/Button";

import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBCardGroup,
    MDBListGroup,
    MDBListGroupItem,
} from "mdb-react-ui-kit";

function PriceTiers() {
    return (
        <MDBCardGroup>
            <MDBCard
                border="secondary"
                alignment="center"
                background="dark"
                className="text-white border-5"
            >
                <MDBCardHeader>
                    <b>Free</b>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBCardText>
                        <MDBListGroup style={{ minWidthL: "22rem" }} light>
                            <MDBListGroupItem color="dark">
                                5 Free Uses
                            </MDBListGroupItem>
                            <MDBListGroupItem color="dark">
                                10 Word Limit
                            </MDBListGroupItem>
                            <MDBListGroupItem color="dark">
                                0 Free Credits /Month
                            </MDBListGroupItem>
                            <MDBListGroupItem color="dark">
                                Cant Create Custom Voices
                            </MDBListGroupItem>
                            <MDBListGroupItem color="dark">
                                No Downloadable Audio
                            </MDBListGroupItem>
                        </MDBListGroup>
                    </MDBCardText>
                    <Button href="/">Back to Free</Button>
                </MDBCardBody>
                <MDBCardFooter className=" text-white">
                    <b>$0/month</b>
                </MDBCardFooter>
            </MDBCard>
            <MDBCard
                border="secondary"
                alignment="center"
                background="dark"
                className="text-white border-5"
            >
                <MDBCardHeader>
                    <b>Basic</b>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBCardText>
                        <MDBListGroup style={{ minWidthL: "22rem" }} light>
                            <MDBListGroupItem color="dark">
                                20 Free Uses
                            </MDBListGroupItem>
                            <MDBListGroupItem color="dark">
                                20 Free Uses
                            </MDBListGroupItem>
                            <MDBListGroupItem color="dark">
                                20 Free Credits /Month
                            </MDBListGroupItem>
                            <MDBListGroupItem color="dark">
                                Cant Create Custom Voices
                            </MDBListGroupItem>
                            <MDBListGroupItem color="dark">
                                No Downloadable Audio
                            </MDBListGroupItem>
                        </MDBListGroup>
                    </MDBCardText>
                    <Button href="/CheckoutPage">Start</Button>
                </MDBCardBody>
                <MDBCardFooter className=" text-white">
                    <b>$15/month</b>
                </MDBCardFooter>
            </MDBCard>
            <MDBCard
                border="secondary"
                alignment="center"
                background="dark"
                className="text-white border-5"
            >
                <MDBCardHeader>
                    <b>Pro</b>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBCardText>
                        <MDBListGroup style={{ minWidthL: "22rem" }} light>
                            <MDBListGroupItem color="dark">
                                Unlimited Uses
                            </MDBListGroupItem>
                            <MDBListGroupItem color="dark">
                                Unlimited Word Limit
                            </MDBListGroupItem>
                            <MDBListGroupItem color="dark">
                                100 Free Credits /Month
                            </MDBListGroupItem>
                            <MDBListGroupItem color="dark">
                                Create Custom Voices
                            </MDBListGroupItem>
                            <MDBListGroupItem color="dark">
                                Downloadable Audio
                            </MDBListGroupItem>
                        </MDBListGroup>
                    </MDBCardText>
                    <Button href="/CheckoutPage">Start</Button>
                </MDBCardBody>
                <MDBCardFooter className=" text-white">
                    <b>$40/mont</b>
                </MDBCardFooter>
            </MDBCard>
        </MDBCardGroup>
    );
}

export default PriceTiers;
