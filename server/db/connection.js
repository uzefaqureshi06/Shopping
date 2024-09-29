const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://keirkdqjwmihaqrybekb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlaXJrZHFqd21paGFxcnliZWtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU2MzkxNzUsImV4cCI6MjA0MTIxNTE3NX0.-LPQMadPdB4Rn98NP7YWyiS_0b272eFyEKGMQjqemmI';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = supabase;
