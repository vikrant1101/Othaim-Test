import { NextResponse } from "next/server";

type Params = {
  params: { slug: string };
};

export async function GET(request: Request, { params }: Params) {
  const { slug } = params;



  try {
    const response = await fetch(
      `https://estore.othaimmarkets.com/api/v18/news/${slug}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'os': 'android',
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
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
