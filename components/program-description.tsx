import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function ProgramDescription() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-6">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="w-full grid grid-cols-3">
          <TabsTrigger value="description">Keterangan</TabsTrigger>
          <TabsTrigger value="updates">Kabar Terbaru</TabsTrigger>
          <TabsTrigger value="donors">Donatur</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="p-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">
              SEBARAN - Semangat Berbagi Baju Lebaran Untuk Anak Yatim dan Dhuafa
            </h3>

            <p>
              Berbagi rezeki tidak sampai tentang harta semata, tapi juga kebahagiaan waktu. Berbagi dan kasih sayang.
            </p>

            <p>
              Di bulan Ramadhan yang penuh berkah ini, mari kita bersama-sama berbagi kebahagiaan dengan menyediakan
              baju lebaran baru untuk anak-anak yatim dan dhuafa. Setiap sumbangan Anda akan membawa senyuman dan
              kebahagiaan bagi mereka di hari raya Idul Fitri.
            </p>

            <h4 className="font-semibold text-primary mt-6">SEBARAN 4.0</h4>
            <p>
              Kegiatan Tahunan Pertama Berbagi Peduli yang mengusung semangat berbagi di bulan Ramadhan. Program ini
              telah berjalan selama 4 tahun dan telah membantu ribuan anak yatim dan dhuafa untuk merasakan kebahagiaan
              di hari raya.
            </p>

            <div className="bg-primary/10 p-4 rounded-lg mt-4">
              <p className="text-primary font-medium">Baca selengkapnya →</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="updates" className="p-4">
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4 py-2">
              <p className="text-sm text-gray-500">12 Maret 2025</p>
              <h4 className="font-medium">Persiapan Distribusi Baju Lebaran</h4>
              <p className="text-sm mt-2">
                Alhamdulillah, persiapan untuk distribusi baju lebaran sudah mencapai 60%. Tim kami sedang melakukan
                survey ke beberapa panti asuhan untuk pendataan ukuran baju.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2">
              <p className="text-sm text-gray-500">5 Maret 2025</p>
              <h4 className="font-medium">Peluncuran Program SEBARAN 2025</h4>
              <p className="text-sm mt-2">
                Program SEBARAN 2025 resmi diluncurkan hari ini. Target kami tahun ini adalah menyediakan 1000 paket
                baju lebaran untuk anak yatim dan dhuafa.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="donors" className="p-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Hamba Allah</h4>
              <p className="text-sm text-primary font-medium">Rp 500.000</p>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Keluarga Bahagia</h4>
              <p className="text-sm text-primary font-medium">Rp 1.000.000</p>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Anonim</h4>
              <p className="text-sm text-primary font-medium">Rp 250.000</p>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Ibu Siti</h4>
              <p className="text-sm text-primary font-medium">Rp 100.000</p>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Bapak Ahmad</h4>
              <p className="text-sm text-primary font-medium">Rp 750.000</p>
            </div>

            <button className="w-full py-2 text-center text-primary font-medium border border-primary/20 rounded-md mt-4 hover:bg-primary/5 transition-colors">
              Lihat Semua Donatur
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

