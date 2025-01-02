import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import B2 from 'backblaze-b2';

const b2 = new B2({
  applicationKeyId: 'c83cd5893dc9', // Replace with your applicationKeyId
  applicationKey: '0059de6e8347b984204da51491a9362d97bcc10675', // Replace with your applicationKey
});

async function uploadToB2(file: File) {
  try {
    await b2.authorize();
    const bucketName = 'mgmb-tkj';

    // Get bucket ID
    const { data: bucketData } = await b2.getBucket({ bucketName });
    const bucketId = bucketData.buckets[0].bucketId;

    // Get upload URL
    const { data: uploadUrlData } = await b2.getUploadUrl({ bucketId });

    // Convert File to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const extension = file.type.split('/')[1] || 'bin';
    const filename = `${uuidv4()}.${extension}`;

    // Upload the file
    const uploadResponse = await b2.uploadFile({
      uploadUrl: uploadUrlData.uploadUrl,
      uploadAuthToken: uploadUrlData.authorizationToken,
      fileName: filename,
      data: buffer,
    });

    return uploadResponse.data;
  } catch (error) {
    console.error('Error uploading to B2:', error);
    throw error;
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const formData = await req.formData();
    const file = formData.get('picture');

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ message: 'No valid file provided' }, { status: 400 });
    }

    const uploadResult = await uploadToB2(file);

    const url = await b2.getUploadUrl(
      {
        bucketId: uploadResult.bucketId
      }
    )
    console.log(url)

    console.log(uploadResult)
    // Construct the public file URL
    const publicUrl = `https://f005.backblazeb2.com/file/${uploadResult.bucketName}/${uploadResult.fileName}`;

    return NextResponse.json({
      message: 'File uploaded successfully',
      fileUrl: publicUrl,
    });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}

