import "../App.css";
import Default from "./DefaultPage";
import { supabase } from "../supabaseClient";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function LoginPage({ setToken }) {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  console.log(formData);

  //Updates formData when input is inputted
  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  //Checks if user is inside of database.  If(user) = log user in and redirect to homepage.  else = gives user message credentials does not exist or is not correct.
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      console.log(data);

      async function getUser() {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        console.log(user);
      }

      getUser();
      setToken(data);
      navigate("/");
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
          <h2 className="text-white py-4">LOGIN</h2>
          <form onSubmit={handleSubmit} id="signUpForm">
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
                onClick={handleSubmit}
              >
                Login
              </Button>
            </div>
          </form>
          <p className="text-white">
            Don't have an account?{" "}
            <a href="/SignUpPage" class="underline">
              Sign up here.
            </a>
          </p>
        </Card>
      </div>
      <div className="py-12"></div>
    </Default>
  );
}
