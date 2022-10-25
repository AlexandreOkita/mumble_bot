import { createClient } from '@supabase/supabase-js'
import secrets from '../../secrets'

// Create a single supabase client for interacting with your database
const options = {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  global: {
    headers: { 'x-my-custom-header': 'MumbleBot' },
  },
};

const supabase = createClient(secrets.sapabaseHost, secrets.subabaseKey, options);

export default supabase;