import fs from 'fs';
import axios from 'axios';

// Konfigurasi TinyPNG API
const TINYPNG_API_KEY = 'Zksfg0fLXDLD7T1hRp4ZlD6cjcZtrrDV'; // Gantilah dengan API key Anda
const TINYPNG_API_URL = 'https://api.tinify.com/shrink';

// Fungsi untuk mengonversi gambar ke format .webp dan menyimpannya di public/img
export const convertImageToWebP = async (inputPath: string, outputPath: string): Promise<string> => {
  try {
    // Membaca gambar yang akan dikompres
    const imageBuffer = fs.readFileSync(inputPath);

    // Mengirim gambar ke TinyPNG API untuk kompresi dan konversi
    const response = await axios.post(TINYPNG_API_URL, imageBuffer, {
      headers: {
        'Authorization': `Basic ${Buffer.from('api:' + TINYPNG_API_KEY).toString('base64')}`,
        'Content-Type': 'application/octet-stream',
      },
    });

    // Mendapatkan URL gambar yang sudah dikompres
    const compressedImageUrl = response.data.output.url;

    // Download gambar hasil kompresi
    const compressedImageBuffer = await axios.get(compressedImageUrl, {
      responseType: 'arraybuffer',
    });

    // Menyimpan gambar hasil kompresi ke folder public/img
    fs.writeFileSync(outputPath, compressedImageBuffer.data);

    return outputPath;
  } catch (error) {
    console.error('Error converting image:', error);
    throw new Error('Error converting image');
  }
};
