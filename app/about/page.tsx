// import Image from 'next/image'
import { ArrowRight, CheckCircle, Target, Heart, Lightbulb, Search } from 'lucide-react'

export default function About() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 ">
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-orange-500 mb-6 flex items-center">
                        <Search className="mr-2" /> Tentang Kami
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 tracking-tight">
                        Musyawarah Guru Mata Pelajaran (MGMP) merupakan sarana yang sangat penting dalam pengembangan kurikulum mata pelajaran ekonomi di tingkat SMA di Jakarta atau satu model yang digunakan untuk peningkatan kompetensi pembelajaran para guru.
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-orange-500 mb-6 flex items-center">
                        <Target className="mr-2" /> Visi
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 tracking-tight">
                        To create a world where everyone has the opportunity to reach their full potential and make a positive impact on society.
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-orange-500 mb-6 flex items-center">
                        <CheckCircle className="mr-2" /> Misi
                    </h2>
                    <ul className="list-decimal list-inside text-lg text-gray-700 space-y-2">
                        <li className='dark:text-gray-300 tracking-tight'>
                            Meningkatkan kompetensi dan profesionalisme guru.
                        </li>
                        <li className='dark:text-gray-300 tracking-tight'>
                            Mendorong inovasi dalam metode pembelajaran.
                        </li>
                        <li className='dark:text-gray-300 tracking-tight'>
                            Memfasilitasi kolaborasi antar guru untuk berbagi materi dan pengalaman.
                        </li>
                        <li className='dark:text-gray-300 tracking-tight'>
                            Menyusun dan menyebarkan materi ajar yang relevan dan berkualitas.
                        </li>
                    </ul>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-orange-500 mb-6 flex items-center">
                        <Heart className="mr-2" /> Tujuan Kami
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 tracking-tight">
                        Meningkatkan dan memperkuat kompetensi guru melalui diskusi dan pelatihan. Peran utamanya adalah memfasilitasi guru dalam bidang studi yang sama melaksanakan tukar (sharing) pendapat dan pengalaman.
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-orange-500 mb-6 flex items-center">
                        <Lightbulb className="mr-2" /> Lebih Banyak Tentang Kami
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-orange-500 mb-3 ">Nilai Inti Kami</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {[
                                    "Teamwork",
                                    "Empowerment",
                                    "Risk-management",
                                    "West Java Province",
                                    "Research",
                                    "Open-minded",
                                    "Value-added"
                                ].map((item, index) => (
                                    <li key={index} className='dark:text-gray-300 tracking-tight'>{item}</li>
                                ))}
                            </ul>

                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-orange-500 mb-3">Achievements</h3>
                            <ol className="list-decimal list-inside text-gray-700 space-y-1">
                                {[
                                    "Published author in [Your Field]",
                                    "Keynote speaker at [Conference Name]",
                                    "Founder of [Your Organization/Project]",
                                    "Recipient of [Award Name]"
                                ].map((item, index) => (
                                    <li key={index} className='dark:text-gray-300'>{item}</li>
                                ))}
                            </ol>

                        </div>
                    </div>
                </section>

                <section className="text-center mb-10">
                    <a
                        href="#contact"
                        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-500 transition-colors duration-300"
                    >
                        Daftar <ArrowRight className="ml-2" />
                    </a>
                </section>
            </div>
        </>
    )
}

