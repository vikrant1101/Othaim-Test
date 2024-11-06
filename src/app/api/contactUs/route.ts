import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body: any = request.headers.get('body');
  const os: any = request.headers.get('os');
  const locale: any = request.headers.get('locale');
  console.info({ body, locale, os }, 'contactus---', request.headers);
  const response = await fetch(
    `https://develop.othaimmarkets.com/api/v18/contactUs?channel=othaimmarkets`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        os,
        body,
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
