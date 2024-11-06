import { NextResponse } from 'next/server';

export async function GET() {
  const { INSTAGRAM_ACCESS_TOKEN } = process.env;

  if (!INSTAGRAM_ACCESS_TOKEN) {
    return NextResponse.json({ error: 'Access token is missing.' }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${INSTAGRAM_ACCESS_TOKEN}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching Instagram feed: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
