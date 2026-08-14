// =========================================================
// ÚNICO ARCHIVO QUE DEBES EDITAR PARA CONECTAR TU PROYECTO
// =========================================================
// 1. Entra a tu proyecto en https://supabase.com
// 2. Ve a: Project Settings > API
// 3. Copia "Project URL" y pégalo en SUPABASE_URL
// 4. Copia "anon public key" y pégalo en SUPABASE_ANON_KEY
// =========================================================

(function () {
  const SUPABASE_URL = "https://skmdwjspcgmswduepipc.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrbWR3anNwY2dtc3dkdWVwaXBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU1MTc1NjIsImV4cCI6MjEwMTA5MzU2Mn0.bH7Szk-1HCWlv5TPW1d0H9QkmfLPNG_JzYvbvrFLRbo";

  window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
})();
