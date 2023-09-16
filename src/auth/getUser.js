import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'; 

export default function GetUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const { data, error } = await supabase.auth.user();

      if (error) {
        console.error('Error fetching user:', error.message);
      } else {
        setUser(data);
      }
    }
    fetchUser();
  }, []); 

  return user;
}