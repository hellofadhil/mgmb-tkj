'use client'

import { Button } from '@/components/ui/button';
import { AppWindow, ArrowRight, BookOpenText, BriefcaseBusiness, UsersRound } from 'lucide-react';
import BlurFade from "@/components/magicui/blur-fade";
import Image from 'next/image';
import Link from 'next/link';

const BLUR_FADE_DELAY = 0.04;

export default function HomePage() {
  return (
    <main>
      <section className="py-20 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <BlurFade delay={0.25} inView>
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl dark:text-white">
                  MGMP TKJ
                  <span className="block text-orange-500">se JAWA BARAT</span>
                </h1>
              </BlurFade>
              <BlurFade delay={0.25 * 2} inView>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl dark:text-gray-300">
                  Musyawarah Guru Mata Pelajaran Teknik Jaringan Komputer dan Telekomunikasi
                </p>
              </BlurFade>
              <BlurFade delay={0.25 * 3} inView>
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                  <Link href='/about'>
                    <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-lg px-8 py-4 inline-flex items-center justify-center dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                      Tentang Kita
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </BlurFade>
            </div>
            <div className="d-flex justify-center mt-12 sm:mx-auto sm:max-w-lg lg:mt-0 lg:mx-0 lg:max-w-none lg:col-span-6 lg:flex lg:items-center">
              <BlurFade delay={0.25 * 2} inView>
                <Image
                  className="hidden dark:block"
                  src="/logo-dark.jpg"
                  width={300}
                  height={200}
                  alt="Logo"
                />
                <Image
                  className="block dark:hidden"
                  src="/logo.webp"
                  width={300}
                  height={200}
                  alt="Logo"
                />
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-black w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={BLUR_FADE_DELAY * 12 * 0.05} inView>
            <h2 className="text-4xl font-semibold text-orange-500 mb-6 flex items-center dark:text-orange-400">
              Program Kami
            </h2>
          </BlurFade>
          <div className='border-b-2 mb-8'></div>
          <BlurFade delay={BLUR_FADE_DELAY * 12 * 0.10} inView>

            <div className="lg:grid lg:grid-cols-3 lg:gap-8">

              {[
                {
                  title: "Pelatihan dan Workshop",
                  description:
                    "Menyelenggarakan pelatihan rutin untuk meningkatkan keterampilan pedagogik dan teknis guru.",
                  icon: <BookOpenText className="h-6 w-6" />,
                },
                {
                  title: "Diskusi Terbuka",
                  description:
                    "Diskusi mingguan/bulanan tentang tantangan yang dihadapi guru di kelas dan solusi terbaik.",
                  icon: <UsersRound className="h-6 w-6" />,
                },
                {
                  title: "Pengembangan Modul Pembelajaran",
                  description:
                    "Membuat dan menyusun modul serta RPP (Rencana Pelaksanaan Pembelajaran) yang sesuai dengan kurikulum terbaru.",
                  icon: <AppWindow className="h-6 w-6" />,
                },
                {
                  title: "Pengembangan Karier",
                  description:
                    "Menyediakan informasi dan bimbingan terkait pengembangan karier guru serta sertifikasi profesi.",
                  icon: <BriefcaseBusiness className="h-6 w-6" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`mt-10 lg:mt-0 ${index === 0 ? "lg:mt-0" : ""}`}
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white dark:bg-orange-600">
                    {item.icon}
                  </div>
                  <div className="mt-5">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h2>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <BlurFade delay={BLUR_FADE_DELAY * 12 * 0.05} inView>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
                  Siap untuk menjadi anggota Kami?
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-300">
                  Mari bersama-sama kita tingkatkan kualitas pendidikan dan persiapkan siswa-siswa kita untuk menghadapi dunia
                  teknologi yang terus berkembang. Jangan lewatkan kesempatan untuk menjadi bagian dari komunitas yang penuh semangat ini!
                </p>
              </div>
            </BlurFade>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <BlurFade delay={BLUR_FADE_DELAY * 12 * 0.15} inView>

              <a
                href="/daftar"
                target="_blank"
              >
                <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-xl px-12 py-6 inline-flex items-center justify-center dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                  Daftar Anggota
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
