import "../App.css";
import Button from "react-bootstrap/Button";
import Default from "./DefaultPage";
import { supabase } from "../supabaseClient";
import { useState } from "react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    userName:'',email:'',password:''
  })
  console.log(formData)
  
  function handleChange(e){
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]:e.target.value
      }
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    try {
      const {data, error} = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              username: formData.userName
            }
          }
        }
      )
      alert('Check your email for verification link')

    } catch(error) {
      console.log(`Error, ${error}`)
    }
  }

  return (
    <Default className="bg-green-100">
      <div className="pt-5">
        <h2>sign up</h2>
        <form onSubmit={handleSubmit} id="signUpForm">
          <div>
            <label htmlFor="userName" className="text-white">Username: </label>
            <input
              type="userName"
              id="userName"
              name="userName"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-white">Email: </label>
            <input
              className="bg-slate-900 text-white my-2"
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-white">Password: </label>
            <input
              className="bg-slate-900 text-white my-2"
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button type="submit" className="text-white">Sign Up</button>
          </div>
        </form>
        If you already have an account click <a href="/LoginPage">Here</a>
      </div>
    </Default>
  );
}
