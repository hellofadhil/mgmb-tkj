import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  return (
    <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-10 py-12 space-x-2 mt-20">
      <div className="container px-4 md:px-6 lg:flex">
        <div className="mb-8 max-w-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Kami Siap Melayani</h2>
          <p className="text-gray-700">
            Bersama kami, berdonasi jadi lebih mudah, menyenangkan, dan penuh arti untuk mereka yang membutuhkan.
            Pilih salah satu layanan yang Sahabat Baik perlukan yuk.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-3">
          {/* Kalkulator Zakat */}
          <Card className="overflow-hidden border shadow-lg text-center p-3">
            <CardContent className="flex flex-col items-center space-y-4">
              <Image
                src="https://bazma.org/wp-content/uploads/2025/01/Kalkulator-Zakat-1.webp"
                alt="Kalkulator Zakat"
                width={100}
                height={100}
                className="object-contain"
              />
              <h3 className="text-md font-bold text-gray-900">Kalkulator Zakat</h3>
              <p className="text-gray-700 text-sm">
                Hitung kewajiban zakat, cukup masukan nilai dan lihat hasilnya.
              </p>
            </CardContent>
          </Card>

          {/* Konfirmasi Donasi */}
          <Card className="overflow-hidden border shadow-lg text-center p-3">
            <CardContent className="flex flex-col items-center space-y-4">
              <Image
                src="https://bazma.org/wp-content/uploads/2025/01/Konfirmasi.webp"
                alt="Konfirmasi Donasi"
                width={100}
                height={100}
                className="object-contain"
              />
              <h3 className="text-md font-bold text-gray-900">Konfirmasi Donasi</h3>
              <p className="text-gray-700 text-sm">
                Sudah Transfer? Yuk konfirmasi donasi Sahabat Baik agar tercatat.
              </p>
            </CardContent>
          </Card>

          {/* Jemput ZISWAF */}
          <Card className="overflow-hidden border shadow-lg text-center p-3">
            <CardContent className="flex flex-col items-center space-y-4">
              <Image
                src="https://bazma.org/wp-content/uploads/2025/01/Jemput-zakat.webp"
                alt="Jemput ZISWAF"
                width={100}
                height={100}
                className="object-contain"
              />
              <h3 className="text-md font-bold text-gray-900">Jemput ZISWAF</h3>
              <p className="text-gray-700 text-sm">
                Tidak perlu kemana-mana, ZISWAF Sahabat Kami Jemput. Mudah bukan?
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
