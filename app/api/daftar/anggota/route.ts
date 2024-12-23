import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body);  // Do something with the data
    // Process the request here

    return NextResponse.json({ message: 'An error occurred', status: 500 });

  } catch (error) {
    console.error('Error reading JSON body:', error);
    return NextResponse.json({ message: 'An error occurred', status: 500, error });

  }
}
