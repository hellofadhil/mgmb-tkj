'use client'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { Menu, Search } from "lucide-react";

import { InteractiveButton } from "@/components/interactive-button";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk menutup menu saat link diklik
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            alt="bazma-logo"
            src="https://bazma.org/wp-content/uploads/2025/02/cropped-Logo.png"
            width={100}
            height={100}
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#beranda" className="text-sm hover:text-primary transition-colors">
            Beranda
          </Link>
          <Link href="#tentang" className="text-sm hover:text-primary transition-colors">
            Tentang Kami
          </Link>
          <Link href="#program" className="text-sm hover:text-primary transition-colors">
            Program Kebaikan
          </Link>
          <Link href="#zakat" className="text-sm hover:text-primary transition-colors">
            Zakat
          </Link>
          <Link href="#wakaf" className="text-sm hover:text-primary transition-colors">
            Wakaf
          </Link>
          <Link href="#berita" className="text-sm hover:text-primary transition-colors">
            Berita
          </Link>
          <Link href="#contact" className="text-sm hover:text-primary transition-colors">
            Kontak
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
            <Search className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
          {/* <ThemeToggle /> */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <DialogTitle className="sr-only">Menu Navigasi</DialogTitle>
              <nav className="flex flex-col gap-4">
                <Link href="#about" className="text-lg" onClick={closeMenu}>
                  About
                </Link>
                <Link href="#services" className="text-lg" onClick={closeMenu}>
                  Services
                </Link>
                <Link href="#projects" className="text-lg" onClick={closeMenu}>
                  Projects
                </Link>
                <Link href="#experience" className="text-lg" onClick={closeMenu}>
                  Experience
                </Link>
                <Link href="#skills" className="text-lg" onClick={closeMenu}>
                  Skills
                </Link>
                <Link href="#contact" className="text-lg" onClick={closeMenu}>
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <InteractiveButton className="hidden md:flex hover:cursor-pointer">
            Login Donatur
          </InteractiveButton>
        </div>
      </div>
    </header>
  );
}