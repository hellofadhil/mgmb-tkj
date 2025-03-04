import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function DonationPromoSection() {
  return (
    <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Card - 2/3 Width */}
          <Card className="overflow-hidden border-0 bg-[#f5ecd9] shadow-lg col-span-2 min-h-[400px]">
            <CardContent className="p-0 h-full">
              <div className="flex h-full flex-col-reverse md:flex-row items-center">
                {/* Content Container */}
                <div className="flex flex-col justify-center p-5 md:w-1/2 md:p-6">
                  <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-4xl">
                    Ragam Kebaikan <br />
                    Bisa Ditunaikan
                  </h2>
                  <p className="mb-4 text-gray-700 text-sm md:text-base">
                    Bazma siap menyambungkan kebaikan dengan para penerima manfaat agar mereka bisa berdaya.
                  </p>
                  <Button className="group w-fit bg-green-700 hover:bg-green-700 rounded-2xl">
                    <Link href="/login">
                      Selengkapnya
                    </Link>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />

                  </Button>
                </div>

                {/* Image Container */}
                <div className="relative h-full md:h-[300px] w-full md:w-1/2 flex items-center justify-center">
                  <Image
                    src="https://bazma.org/wp-content/uploads/2025/02/Img-768x728.png"
                    alt="Orang menyerahkan tas dan bingkisan"
                    width={300}
                    height={300}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Card - 1/3 Width */}
          <Card className="overflow-hidden border-0 bg-red-600 text-white shadow-lg col-span-1 min-h-[400px]">
            <CardContent className="flex h-full flex-col items-center justify-center p-5 text-center md:p-6">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                #Yuk Jadi <br />
                Fundraiser
              </h2>
              <p className="mb-4 max-w-md text-sm md:text-base">
                Dapatkan peluang Pahala Jariyah dengan membagikan Campaign. Desain kami sediakan, anda tinggal sebarkan.
              </p>
              <Button className="group bg-bazma hover:bg-bazma rounded-2xl">
                <Link href="/login">
                  Daftar Fundraiser
                </Link>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
