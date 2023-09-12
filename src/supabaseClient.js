import { createClient } from '@supabase/supabase-js'


const projectURL= process.env.REACT_APP_DB_URL
const projectAPIKey = process.env.REACT_APP_DB_API

export const supabase = createClient(projectURL, projectAPIKey, {
    autoRefreshToken: true,
})