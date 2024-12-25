import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid'; // Ensure this is installed: `npm install uuid`
import { put } from "@vercel/blob";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // Avoid accessing req.body before req.formData()
    const formData = await req.formData();
    const file = formData.get('picture');

    if (!file || !(file instanceof Blob)) {
      return NextResponse.json({ message: 'No valid file provided' }, { status: 400 });
    }

    // Generate a unique filename with UUID
    const extension = file.type.split('/')[1] || 'bin'; // Default to 'bin' if extension is missing
    const filename = `${uuidv4()}.${extension}`;

    // Simulated `put` function for storing the file
    const { url } = await put(filename, file, { access: 'public' });
    console.log(url)
    return NextResponse.json({ message: 'File uploaded successfully', url });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}

// Mock of the put function
// async function put(filename: string, file: Blob, options: { access: string }): Promise<object> {
//   // Simulated file storage action
//   console.log(`Storing file: ${filename}, Options:`, options);
//   return { filename, url: `https://example.com/${filename}` }; // Simulated blob response
// }
