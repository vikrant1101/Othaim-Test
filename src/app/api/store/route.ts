import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const storeId = searchParams.get('storeId');
  const locale = request.headers.get('language') || 'en'; 
  const apiUrl = process.env.NEXT_PUBLIC_STORE_API;

  const response = await fetch(`${apiUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      language: locale,
    },
    body: JSON.stringify({
      Class: 'Webservices',
      method: 'AllStores',
      StoreId: storeId,
    }),
  });

  const data = await response.json();

  return NextResponse.json(data);
}
