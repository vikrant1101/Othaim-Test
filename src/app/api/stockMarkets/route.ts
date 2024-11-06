import { NextResponse } from 'next/server';

export async function GET() {
  const { STOCK_MARKET } = process.env;

  try {
    const response = await fetch(
      `${STOCK_MARKET}/?sid=0.3581998528255774&instrumentID=109181&lang=en-GB&decimalMarket=.&thousandGroupMarker=%2C&timeZone=Arab%20Standard%20Time&defaultNumberFormat=%23%2C%23%230.00&companycode=sa-4001&getCleanData=false&IsCard=false&PeriodJumpValue=0&CurrencyConvert=&v=static`
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
