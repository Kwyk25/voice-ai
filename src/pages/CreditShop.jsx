import "../App.css"
import Default from "./DefaultPage";
import Button from "react-bootstrap/Button";

export default function CreditShop() {
    return (
        <Default className="bg-green-100">
            <div>
                <h2>credit</h2>
                <Button href="/CheckoutPage">Check Out</Button>
            </div>
        </Default>
    );
}