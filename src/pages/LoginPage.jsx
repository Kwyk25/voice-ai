import "../App.css"
import Default from "./DefaultPage";
import { supabase } from "../supabaseClient";
import { useState } from "react";

export default function LoginPage() {


    return (
        <Default className="bg-green-100">
            <div>
                <h2>login</h2>
            </div>
        </Default>
    );
}