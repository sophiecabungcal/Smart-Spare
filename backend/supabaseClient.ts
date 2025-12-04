import { createClient } from '@supabase/supabase-js';

// the ! at the end of the lines tells TypeScript that we are sure these environment variables are defined
// the ! prevents TypeScript from throwing an error about possible undefined values
// and it also forces it to treat the values as always present
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);