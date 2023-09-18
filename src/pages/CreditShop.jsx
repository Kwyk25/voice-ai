import "../App.css"
import Default from "./DefaultPage";
import Button from "react-bootstrap/Button";
import PriceTiers from "../components/PriceTiers";
import PriceCoins from "../components/PriceCoins";

export default function CreditShop() {
    return (
        <Default>
            <div className="pt-5">
                <h1>Credit</h1>
                <div>
                    <PriceTiers />
                </div>
                <div>
                    <PriceCoins />
                </div>
                <Button href="/CheckoutPage">Check Out</Button>
            </div>
        </Default>
    );
}