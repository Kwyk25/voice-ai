import React from "react";
import Button from "react-bootstrap/Button";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardFooter,
    MDBRow,
    MDBCol,
} from "mdb-react-ui-kit";

export default function App() {
    return (
        <MDBRow className="row-cols-1 row-cols-md-4 g-4 w-100%">
            <MDBCol>
                <MDBCard>
                    <Button href="/CheckoutPage">
                        <MDBCardBody>
                            <MDBCardTitle>5 Credits</MDBCardTitle>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">$5</small>
                        </MDBCardFooter>
                    </Button>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard className="h-100">
                    <Button href="/CheckoutPage">
                        <MDBCardBody>
                            <MDBCardTitle>25 credits</MDBCardTitle>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">$25</small>
                        </MDBCardFooter>
                    </Button>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard className="h-100">
                    <Button href="/CheckoutPage">
                        <MDBCardBody>
                            <MDBCardTitle>50 credits</MDBCardTitle>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">$50</small>
                        </MDBCardFooter>
                    </Button>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard className="h-100">
                    <Button href="/CheckoutPage">
                        <MDBCardBody>
                            <MDBCardTitle>100 credits</MDBCardTitle>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">$100</small>
                        </MDBCardFooter>
                    </Button>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard className="h-100">
                    <Button href="/CheckoutPage">
                        <MDBCardBody>
                            <MDBCardTitle>125 credits</MDBCardTitle>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">$125</small>
                        </MDBCardFooter>
                    </Button>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard className="h-100">
                    <Button href="/CheckoutPage">
                        <MDBCardBody>
                            <MDBCardTitle>150 credits</MDBCardTitle>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">$150</small>
                        </MDBCardFooter>
                    </Button>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard className="h-100">
                    <Button href="/CheckoutPage">
                        <MDBCardBody>
                            <MDBCardTitle>175 credits</MDBCardTitle>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">$175</small>
                        </MDBCardFooter>
                    </Button>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard className="h-100">
                    <Button href="/CheckoutPage">
                        <MDBCardBody>
                            <MDBCardTitle>200 credits</MDBCardTitle>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">$200</small>
                        </MDBCardFooter>
                    </Button>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
}
