import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { put } from '@vercel/blob';
import { neon } from "@neondatabase/serverless";
import { TinyPNG } from 'tinypng';

async function uploadFile(file: File): Promise<string> {
  try {
    const client = new TinyPNG('Zksfg0fLXDLD7T1hRp4ZlD6cjcZtrrDV');
    const extension = file.type.split('/')[1] || 'bin';
    const filename = `${uuidv4()}.${extension}`;

    // Convert the file to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Compress the file using TinyPNG client
    const fileCompress = await client.compress(buffer, {
      preserve: ['copyright', 'location']
    });

    // Extract the compressed data (assume it provides a method or property like `fileCompress.data`)
    const compressedData = Buffer.isBuffer(fileCompress)
      ? fileCompress
      : Buffer.from(fileCompress.data);

    // Upload the compressed file
    const { url } = await put(filename, compressedData, { access: 'public' });

    return url;
  } catch (error) {
    console.error('Error uploading to Blob Storage:', error);
    throw new Error('Failed to upload file');
  }
}


export async function POST(req: NextRequest): Promise<NextResponse> {
  try {

    // Ensure that DATABASE_URL is properly set
    const databaseUrl = process.env.DATABASE_URL || ""

    // Parse form data
    const formData = await req.formData();
    const file = formData.get('picture');


    if (!file || !(file instanceof File)) {
      return NextResponse.json({ message: 'No valid file provided' }, { status: 400 });
    }

    // Convert form data to object for easier handling
    const formObject = Object.fromEntries(formData.entries()) as Record<string, string>;
    const {
      full_name,
      email,
      telephone,
      jenis_kelamin,
      tanggal_lahir,
      jabatan,
      unit_kerja,
      asal_sekolah,
      harapan,
    } = formObject;

    // Upload file and get the URL
    const photo_link = await uploadFile(file);

    // Connect to the Neon database
    const sql = neon(databaseUrl);

    // Insert data into the 'member' table
    await sql`
      INSERT INTO member 
      (full_name, email, telephone, jenis_kelamin, tanggal_lahir, jabatan, unit_kerja, asal_sekolah, harapan, photo_link) 
      VALUES (${full_name}, ${email}, ${telephone}, ${jenis_kelamin}, ${tanggal_lahir}, ${jabatan}, ${unit_kerja}, ${asal_sekolah}, ${harapan}, ${photo_link});
    `;

    return NextResponse.json({
      message: 'Member data and file uploaded successfully',
    });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
