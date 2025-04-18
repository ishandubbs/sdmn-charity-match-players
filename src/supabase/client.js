import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://unmqmhuwftzbfrlxggxq.supabase.co"
const supabaseKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVubXFtaHV3ZnR6YmZybHhnZ3hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0Nzk5NDEsImV4cCI6MjA2MDA1NTk0MX0.KsMqPIHAsU6IajLqyTzwzyzWpciz1baMYR7tV3pvYfQ"

export const supabase = createClient(supabaseURL, supabaseKEY)