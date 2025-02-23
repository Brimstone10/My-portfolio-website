
import { createClient } from '@supabase/supabase-js';

// Lovable automatically injects these environment variables when connected to Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please ensure you have connected your project to Supabase.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
