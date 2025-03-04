import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Bodhi",
    username: "Ketua TPQ Darul Ilmu",
    body: "Terima kasih atas bantuan Al-Quran yang diberikan oleh Aksi Kebaikan. Bantuan ini bermanfaat agar masyarakat disini bisa belajar Al-Quran.",
    img: "https://aksikebaikan.greatedunesia.net/wp-content/uploads/2025/01/Bodhi.jpg",
  },
  {
    name: "Dian Sumatri",
    username: "Kepala Pusat Sumber Belajar",
    body: "Bantuan dana pembelian buku kotak ilmu ini adalah amanah yang harus kita sampaikan ke yang berhak. Semoga santunan tersebut senantiasa menjadi limpahan amal bagi para donatur-donatur dan mencurahkan keberkahan untuk anak-anak.",
    img: "https://aksikebaikan.greatedunesia.net/wp-content/uploads/2025/01/Dian-Sumatri.png",
  },
  {
    name: "Djumati Sipirunaung",
    username: "Ketua Yayasan Ar-Rahman BEO",
    body: "Bantuan Laptop dan Alat belajar ini sangat bermanfaat dalam menunjang proses belajar mengajar kami, madrasah yang berada di daerah terluar Indonesia.",
    img: "https://aksikebaikan.greatedunesia.net/wp-content/uploads/2025/01/Ketua-Yayasan-Ar-Rahman-BEO.png",
  },
  {
    name: "Bilal Bahrul Ulum",
    username: "Siswa SMART",
    body: "Alhamdulillah dengan adanya tambahan takjil buka puasa ini, menambah semangat kami untuk senantiasa mengamalkan shaum sunnah senin dan Kamis.",
    img: "https://aksikebaikan.greatedunesia.net/wp-content/uploads/2025/01/Bilal.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 shadow-lg",
        "border-gray-200 bg-white hover:bg-gray-50 transition-all duration-300",
        "dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Image className="rounded-full border" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-gray-900 dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs text-gray-600 dark:text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-700 dark:text-gray-300">{body}</blockquote>
    </figure>
  );
};


export function MarqueeTestimonial() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s] mt-4">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
