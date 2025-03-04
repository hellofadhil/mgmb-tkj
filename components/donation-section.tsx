'use client'
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const categories = [
  { name: "Semua", description: "Lihat semua campaign Aksi Kebaikan", color: "bg-blue-600", textColor: "text-white" },
  { name: "Kewajiban", description: "Tunaikan kewajiban Zakat, Fidyah, dan Kafarat disini", color: "bg-white", textColor: "text-gray-900" },
  { name: "Sedekah", description: "Sedekah untuk Pendidikan kaum Dhuafa", color: "bg-white", textColor: "text-gray-900" },
  { name: "Ramadan", description: "Campaign Khusus Spesial Ramadan", color: "bg-white", textColor: "text-gray-900" },
];

const campaigns = [
  { title: "Zakat Penghasilan", category: "Kewajiban", description: "Nisab 83 Gram Emas", price: "Hitung Zakat Disini" },
  { title: "Tunaikan Zakat Maal", category: "Kewajiban", description: "Nisab 83 Gram Emas", price: "Tunaikan Disini" },
  { title: "Tunaikan Kewajiban Fidyah", category: "Kewajiban", description: "Tunaikan Fidyah", price: "Rp30.000/Paket" },
  { title: "Sedekah Al-Quran", category: "Sedekah", description: "Sedekah Al-Quran", price: "Tunaikan Disini" },
  { title: "Makanan Berbuka Puasa", category: "Ramadan", description: "Paket makanan untuk berbuka", price: "Berbagi Disini" },
  { title: "Parsel Lebaran untuk Masyarakat Dhuafa", category: "Ramadan", description: "Paket Bahagia", price: "Berbagi Sekarang" },
];

export default function DonationSection() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredCampaigns = selectedCategory === "Semua" ? campaigns : campaigns.filter(campaign => campaign.category === selectedCategory);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <aside className="w-full md:w-1/4 space-y-3">
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className={`${cat.color} p-3 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-all ${selectedCategory === cat.name ? "ring-2 ring-blue-500" : ""}`}
            onClick={() => setSelectedCategory(cat.name)}
          >
            <h3 className={`font-semibold ${cat.textColor}`}>{cat.name}</h3>
            <p className="text-xs text-gray-700">{cat.description}</p>
          </div>
        ))}
      </aside>
      <main className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCampaigns.map((campaign, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
            <Image src="https://bazma.org/wp-content/uploads/2025/02/Bazma.png" alt={campaign.title} width={300} height={150} className="w-full h-32 object-cover" />
            <CardHeader>
              <CardTitle className="text-base font-semibold truncate">{campaign.title}</CardTitle>
              <p className="text-xs text-gray-500">{campaign.category}</p>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-700 truncate">{campaign.description}</p>
              <Button variant="outline" className="w-full mt-3 text-sm hover:bg-bazma" onClick={() => window.location.href='/donation'}>
                {campaign.price}
              </Button>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
