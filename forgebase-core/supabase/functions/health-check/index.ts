// Forgebase Core - Health Check Edge Function
// Validates that the function runtime works

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { 
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      }
    });
  }

  const data = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    contracts: {
      auth_identity: 'Supabase Auth',
      data_ownership: 'RLS enabled',
      realtime_events: 'Supabase Realtime',
      offline_safety: 'updated_at timestamps',
      auditability: 'created_at, updated_at, deleted_at'
    }
  };

  return new Response(
    JSON.stringify(data),
    { 
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      } 
    },
  );
});
