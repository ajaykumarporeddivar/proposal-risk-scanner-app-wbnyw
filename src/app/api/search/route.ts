import { proposals } from '@/lib/data';
import { NextRequest } from 'next/server';

const MAX_SEARCH_RESULTS = 20;
const DEFAULT_EMPTY_QUERY_RESULTS = 5;

export async function GET(request: NextRequest): Promise<Response> {
  const { searchParams } = request.nextUrl;
  const query = searchParams.get('q') || '';
  const type = searchParams.get('type') || ''; // 'type' is optional, but included for completeness

  let results = proposals;

  if (query) {
    const lowerCaseQuery = query.toLowerCase();
    results = proposals.filter(
      (proposal) =>
        proposal.name.toLowerCase().includes(lowerCaseQuery) ||
        proposal.description.toLowerCase().includes(lowerCaseQuery)
    );
  } else {
    // If query is empty, return the first few items as a default
    results = proposals.slice(0, DEFAULT_EMPTY_QUERY_RESULTS);
  }

  // Limit the number of results
  const limitedResults = results.slice(0, MAX_SEARCH_RESULTS);

  return Response.json({
    ok: true,
    data: {
      results: limitedResults,
      total: limitedResults.length,
      query: query,
      type: type,
    },
  });
}