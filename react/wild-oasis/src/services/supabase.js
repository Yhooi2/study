import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://owpvwvddsrqrokvwftjs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93cHZ3dmRkc3Jxcm9rdndmdGpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NjUwNTMsImV4cCI6MjA2NTM0MTA1M30.Itq7AZ5y6XkGbrIOnNfEvbIOy7zivRIWje63zDscTyg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
