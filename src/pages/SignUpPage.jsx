import "../App.css";
import Button from "react-bootstrap/Button";
import Default from "./DefaultPage";
import { supabase } from "../supabaseClient";
import { useState } from "react";
import Card from "react-bootstrap/Card";

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
    });
    console.log(formData);

    function handleChange(e) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value,
            };
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        username: formData.userName,
                    },
                },
            });
            alert("Check your email for verification link");
        } catch (error) {
            console.log(`Error, ${error}`);
        }
    }

    return (
        <Default>
            <div className="py-20"></div>
            <div className="py-20">
                <Card
                    className="bg-gradient-to-tr from-pink-500 via-blue-800 to-cyan-500 
                    mx-auto"
                    border="dark"
                    style={{ width: "30rem" }}
                >
                    <h2 className="text-white py-4">SIGN UP</h2>
                    <form onSubmit={handleSubmit} id="signUpForm">
                        <div>
                            <input
                                placeholder="username"
                                className="bg-slate-900 text-white my-2"
                                type="userName"
                                id="userName"
                                name="userName"
                                onChange={handleChange}
                                style={{ width: "20rem" }}
                                required
                            />
                        </div>
                        <div>
                            <input
                                placeholder="example@gmail.com"
                                className="bg-slate-900 text-white my-2"
                                type="email"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                style={{ width: "20rem" }}
                                required
                            />
                        </div>
                        <div>
                            <input
                                placeholder="password"
                                className="bg-slate-900 text-white my-2"
                                type="password"
                                id="password"
                                name="password"
                                onChange={handleChange}
                                style={{ width: "20rem" }}
                                required
                            />
                        </div>
                        <div>
                            <Button
                                type="submit"
                                className="bg-slate-950 text-white my-3"
                            >
                                Join
                            </Button>
                        </div>
                    </form>
                    <p className="text-white">
                    Already have an account?{" "}<a href="/LoginPage" class='underline'>Sign in here.</a>
                    </p>
                </Card>
            </div>
            <div className="py-12"></div>
        </Default>
    );
}