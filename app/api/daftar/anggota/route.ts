import { NextRequest, NextResponse } from "next/server";
import { put } from '@vercel/blob';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const formData = await req.formData(); // Use formData to parse incoming form data
    const file = formData.get('picture') as Blob;

    if (!file) {
      return NextResponse.json({ message: 'No file provided' }, { status: 400 });
    }

    const filename = file.name; // Extract file name
    const blob = await put(filename, file, { access: 'public' });

    return NextResponse.json({ message: 'File uploaded successfully', blob });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ message: 'An error occurred', status: 500, error: error.message });
  }
}
