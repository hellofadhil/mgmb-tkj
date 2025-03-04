import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white py-10 px-6 md:px-12 lg:px-20 mt-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 text-gray-700">
                <div>
                    <Image src="https://bazma.org/wp-content/uploads/2025/02/cropped-Logo.png" alt="Bazma Logo" 
                    width={100} height={100} />
                    <p className="text-sm">Yayasan Bazma (Baituzzakah Amanah Manfaat Ummat) sebagai lembaga yang hadir dengan nilai-nilai semangat berbagi dengan mengelola dana Zakat, Infak/Sedekah, Wakaf dan dana sosial lainnya.</p>
                    <div className="mt-4">
                        <a href="#" className="text-gray-500 hover:text-gray-700">
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-3">Kerjasama</h3>
                    <ul className="text-sm space-y-2">
                        <li><a href="#" className="hover:text-gray-900">Gabung Volunteer</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-3">Tentang Kami</h3>
                    <ul className="text-sm space-y-2">
                        <li><a href="#" className="hover:text-gray-900">Tentang Kami</a></li>
                        <li><a href="#" className="hover:text-gray-900">Program</a></li>
                        <li><a href="#" className="hover:text-gray-900">Rekening ZISWAF</a></li>
                        <li><a href="#" className="hover:text-gray-900">Penyaluran Donasi</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-3">Support</h3>
                    <ul className="text-sm space-y-2">
                        <li><a href="#" className="hover:text-gray-900">Customer Relationship</a></li>
                        <li><a href="#" className="hover:text-gray-900">Kalkulator Zakat</a></li>
                        <li><a href="#" className="hover:text-gray-900">Campaign</a></li>
                        <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
