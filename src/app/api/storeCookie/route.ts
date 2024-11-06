import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  try {
    const cookieStore = cookies();
    const body = await req.json();
    const { name, value,title} = body;
    console.log('body', body);
    if (!name || !value) {
      return NextResponse.json({ success: false, message: 'Cookie name and value are required' }, { status: 400 });
    }

    // Set the cookie with 1 year expiration
    cookieStore.set(name, JSON.stringify(value), { maxAge: 60 * 60 * 24 * 365 }); // 1 year

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error setting cookie:', error);
    return NextResponse.json({ success: false, message: 'Failed to set cookie' }, { status: 500 });
  }
}
