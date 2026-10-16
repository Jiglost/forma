// Forma configuration for this copy of the app. Edit, then reload. No rebuild needed.
// Supabase: Project Settings -> API. The anon key is public by design; never put the service_role key here.
window.FORMA_CONFIG = {
  supabaseUrl: 'https://akgmgbzysutundokylpl.supabase.co',
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrZ21nYnp5c3V0dW5kb2t5bHBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxODgwNTYsImV4cCI6MjEwNzc2NDA1Nn0.2mCYleWPDMGQCTMsEO7ZKKiO3c4gncguLM_r7NmyLjE',
  // Turn these on only after enabling each provider in Supabase -> Authentication -> Providers.
  providers: { email: true, phone: false, google: false, apple: false }
};
