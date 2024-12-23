import path from 'path';
import sharp from 'sharp';

export async function GET() {
  try {
    // Path gambar input (misalnya public/logo.png)
    const inputPath = path.join(process.cwd(), 'public', 'logo.png');

    // Path output di public/img/logo.webp
    const outputPath = path.join(process.cwd(), 'public', 'img', 'logo.webp');

    // Baca gambar dan konversi ke format .webp menggunakan sharp
    await sharp(inputPath)
      .webp()
      .toFile(outputPath);

    return new Response('Image converted successfully', {
      status: 200,
    });
  } catch (error) {
    console.error('Error converting image:', error);
    return new Response('Error converting image', {
      status: 500,
    });
  }
}
