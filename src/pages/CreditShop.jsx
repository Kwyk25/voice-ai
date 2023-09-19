import "../App.css";
import Default from "./DefaultPage";
import Button from "react-bootstrap/Button";
import PriceTiers from "../components/PriceTiers";
import PriceCoins from "../components/PriceCoins";
import { Cart4 } from "react-bootstrap-icons";

export default function CreditShop() {
    return (
        <Default>
            <div className="pt-5">
                <div>
                    <h1 className="text-white">Credit Store </h1>
                </div>

                <div className="py-5">
                    <h2 className="text-white py-2">
                        Choose Between A Tier System
                    </h2>
                    <PriceTiers />
                </div>
                <div className="py-5">
                    <h3 className="text-white py-2">Single Purchase</h3>
                    <PriceCoins />
                </div>
            </div>
        </Default>
    );
}
