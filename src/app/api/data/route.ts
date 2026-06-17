import { proposals } from '@/lib/data';
import { NextRequest } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function GET(): Promise<Response> {
  return Response.json({
    ok: true,
    data: {
      proposals: proposals,
      total: proposals.length,
    },
  }, { headers: corsHeaders });
}

export async function POST(request: NextRequest): Promise<Response> {
  const body = await request.json();
  return Response.json({
    ok: true,
    message: 'Demo mode — data not persisted',
    received: body,
  }, { headers: corsHeaders });
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: corsHeaders,
  });
}