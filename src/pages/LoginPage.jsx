import "../App.css";
import Default from "./DefaultPage";
import { supabase } from "../supabaseClient";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"

export default function LoginPage({setToken}) {
  let navigate = useNavigate()
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
      
      if(error) throw error
      console.log(data)

      async function getUser(){
      const { data: { user } } = await supabase.auth.getUser()
      console.log(user)
      }

      getUser()
      setToken(data)
      navigate('/')
    } catch (error) {
      console.log(`Error, ${error}`);
    }
  }

  return (
    <Default className="bg-green-100">
      <div>
        <h2>sign up</h2>
        <form onSubmit={handleSubmit} id="signUpForm">
          <div>
            <label htmlFor="email" className="text-white">
              Email:{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-white">
              Password:{" "}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button type="submit" className="text-white">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </Default>
  );
}

