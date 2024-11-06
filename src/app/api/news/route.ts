import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const page: any = request.headers.get('pageno') || 1;
  const os: any = request.headers.get('os') || undefined;
  const locale: any = request.headers.get('locale') || undefined;

  const response = await fetch(
    `https://estore.othaimmarkets.com/api/v18/news?page=${page}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        os,
        locale,
      },
    }
  );
  if (!response.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: response.status }
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}
