"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

export default function DonationButton({ large = false }: { large?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const [amount, setAmount] = useState("")

  const toggleModal = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Tombol Donasi */}
      <Button className="w-full md:w-auto font-bold" onClick={toggleModal}>
        <Heart className="mr-2" size={large ? 20 : 16} />
        Donasi Sekarang
      </Button>

      {/* Modal Donasi */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Semangat Berbagi Baju Lebaran</DialogTitle>
          </DialogHeader>

          {/* Pilihan Nominal */}
          <div className="grid grid-cols-3 gap-2">
            {["50000", "100000", "500000", "1000000"].map((value) => (
              <Button
                key={value}
                variant={amount === value ? "default" : "outline"}
                onClick={() => setAmount(value)}
              >
                Rp {parseInt(value).toLocaleString()}
              </Button>
            ))}
            <Input
              placeholder="Nominal lainnya"
              value={amount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
              type="number"
            />
          </div>

          {/* Metode Pembayaran */}
          <Label>Metode Pembayaran</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Pilih metode pembayaran" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bank">Transfer Bank</SelectItem>
              <SelectItem value="ewallet">E-Wallet</SelectItem>
              <SelectItem value="qris">QRIS</SelectItem>
            </SelectContent>
          </Select>

          {/* Sapaan & Nama */}
          <Label>Sapaan</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Pilih sapaan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bapak">Bapak</SelectItem>
              <SelectItem value="ibu">Ibu</SelectItem>
              <SelectItem value="kak">Kak</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Nama Lengkap" />
          <div className="flex items-center gap-2">
            <Checkbox id="hide-name" />
            <Label htmlFor="hide-name">Sembunyikan nama saya (Orang Baik)</Label>
          </div>

          {/* Kontak & Doa */}
          <Input placeholder="No Whatsapp atau Handphone" type="tel" />
          <Input placeholder="Email (optional)" type="email" />
          <Textarea placeholder="Tuliskan pesan atau doa (optional)" />

          <DialogFooter>
            <Button variant="outline" onClick={toggleModal}>Batal</Button>
            <Button> Lanjutkan Donasi </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
