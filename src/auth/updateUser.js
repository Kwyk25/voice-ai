import { useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function updateUser({username}) {
  async function updateUserData() {
    try {
      const updateData = {
        user_metadata: {
            username: username
        }
      };

      const { data, error } = await supabase.auth.updateUser(updateData);

      if (error) {
        console.error("Error updating user:", error.message)
      } else {
        console.log("User updated successfully:", data);
        window.alert("Succesfully updated user data")
      }
    } catch (err) {
      console.error("Error updating user:", err);
      window.alert("Something went wrong. Please try again later.");
    }
  }

  updateUserData()

  return null
}
