import VolunteerCTA from "@/components/button-cta";
import DonationSection from "@/components/donation-section";
import DonationPromoSection from "@/components/section-main";
import ServicesSection from "@/components/service";
import { MarqueeTestimonial } from "@/components/testimonial";


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <DonationPromoSection />
      <ServicesSection />

      <div className="container mx-auto mb-12 px-4 max-w-6xl mt-28">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Berbagai Pilihan Kebaikan
          </h2>
          <p className="mt-3 text-md text-gray-700 text-sm max-w-lg mx-auto">
            Berani berbuat baik, karena kebaikan kebaikanmu hantarkan senyum dan kebahagiaan kepada mereka.
            <span className="text-red-600 font-bold"> Donasi Mudah mulai Rp10.000.</span>
          </p>
        </div>
        <DonationSection />
      </div>

      <div className="container mx-auto mb-12 px-4 max-w-5xl mt-28">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Apa Kata Mereka Tentang Bazma?
          </h2>
          <p className="mt-3 text-md text-gray-700">
            Lebih dari 30 tahun, Bazma telah menebar manfaat bagi sesama
          </p>
        </div>
        <MarqueeTestimonial />
      </div>


      <VolunteerCTA />
    </div>
  );
}
