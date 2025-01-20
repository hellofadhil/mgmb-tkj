import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { put } from '@vercel/blob';
import { neon } from "@neondatabase/serverless";
import axios from 'axios';

async function uploadFile(file: File): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer());
  const response = await axios.post(
    'https://api.tinify.com/shrink',
    buffer,
    {
      headers: {
        'Content-Type': 'application/octet-stream',
        Authorization: `Basic ${Buffer.from(`api:${process.env.TINYPNG_API_KEY}`).toString('base64')}`,
      },
    }
  );

  const { url: compressedUrl } = response.data?.output || {};
  if (!compressedUrl) throw new Error('Compression failed');

  const compressedData = await axios.get(compressedUrl, { responseType: 'arraybuffer' });
  const filename = `${uuidv4()}.${file.type.split('/')[1] || 'bin'}`;
  const { url } = await put(filename, Buffer.from(compressedData.data), { access: 'public' });

  return url;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {

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


    const sql = neon(process.env.DATABASE_URL || "");

    const existEmail = await sql`select email from member where email = ${email}`
    if (existEmail) return NextResponse.json({ message: 'Email ini sudah digunakan.' }, { status: 409 });

    // Upload file and get the URL
    const photo_link = await uploadFile(file);

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
