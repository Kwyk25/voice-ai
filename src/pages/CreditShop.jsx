import "../App.css"
import Default from "./DefaultPage";
import Button from "react-bootstrap/Button";

export default function CreditShop() {
    return (
        <Default>
            <div className="pt-5">
                <h2>credit</h2>
                <Button href="/CheckoutPage">Check Out</Button>
            </div>
        </Default>
    );
}