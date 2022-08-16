import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://qsrfqtigvxinowktlazu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzcmZxdGlndnhpbm93a3RsYXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA2NjQ0NzcsImV4cCI6MTk3NjI0MDQ3N30.aH-A-yE0DabbkL2ry9Z4p7ySdZMlE6Bay-tIICdaum4"
);
