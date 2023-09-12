import "../App.css";
import Default from "./DefaultPage";
import { supabase } from "../supabaseClient";
import { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(null);

  async function emailSignUpForm() {
    try {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        console.error(
          `Error signing up with email and password: ${error.message}`
        );
        return;
      }

      setSignUp(user);
    } catch (error) {
      console.error("An unexpected error occurred:", error.message);
    }
  }

  async function googleSignUp() {
    let { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    setSignUp(data);
    if (error) {
      console.log(`Error Signing up with Google, ${error}`);
    }
  }

  return (
    <Default className="bg-green-100">
      <div>
        <h2>sign up</h2>
        <form onSubmit={emailSignUpForm} id="signUpForm">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </Default>
  );
}
