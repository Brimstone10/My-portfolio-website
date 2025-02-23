
import { createClient } from '@supabase/supabase-js';

// Lovable automatically injects these environment variables when connected to Supabase
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please ensure you have connected your project to Supabase.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
