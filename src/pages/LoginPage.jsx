import "../App.css"
import Default from "./DefaultPage";
import { supabase } from "../supabaseClient";
import { useState } from "react";

export default function LoginPage() {


    return (
        <Default>
            <div className="pt-5">
                <h2>login</h2>
            </div>
        </Default>
    );
}