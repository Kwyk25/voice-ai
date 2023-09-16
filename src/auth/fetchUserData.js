import { supabase } from "../supabaseClient";

export async function fetchUserData() {
    try {
      const { data } = await supabase.auth.getUser();
      return data.user;
    } catch (error) {
      console.error('Error fetching user data:', error.message);
      return null;
    }
  }