
import { createClient } from '@supabase/supabase-js';

// Lovable automatically injects these environment variables when connected to Supabase
const supabaseUrl = 'https://vbouvzsvdnwnjtuynvjk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZib3V2enN2ZG53bmp0dXludmprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyOTg1MzIsImV4cCI6MjA1NDg3NDUzMn0.k9UCDCZ8eqTSTV9optyn-D5wEVUdQ0ht2pg2-sM1tc8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
