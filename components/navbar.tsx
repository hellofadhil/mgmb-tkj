'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet'
import { NavbarMenu } from './navbar-menu'
import { ModeToggle } from './mode-toggle'


const menuItems = [
    { name: "Home", href: "" },
    {
        name: 'Profil Kami', href: '#', submenu: [
            { name: 'Tentang Kami', href: '/about' },
            { name: 'Agenda', href: '/404' },
        ]
    },
    { name: 'Anggota', href: '/anggota' },
    { name: 'e-Course', href: '/404' },
    { name: 'Team Dev', href: '/404' },
]


export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [submenuOpen, setSubmenuOpen] = React.useState<string | null>(null)

    const toggleSubmenu = (itemName: string) => {
        setSubmenuOpen(submenuOpen === itemName ? null : itemName)
    }
    const closeAll = () => {
        setIsOpen(false)
        setSubmenuOpen(null)
    }
    return (
        <nav className="bg-white shadow dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
                                MGMP-TKJ
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <NavbarMenu />
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center gap-3">
                        <Button ><Link href="/daftar">Daftar</Link></Button>
                        <ModeToggle />
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden gap-2">
                        <ModeToggle />
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="md:hidden">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
                                <nav className="flex flex-col h-full">
                                    <div className="flex items-center justify-between p-4 border-b">
                                        <h2 className="text-lg font-semibold">Menu</h2>

                                    </div>
                                    <ul className="flex-1 overflow-y-auto">
                                        {menuItems.map((item) => (
                                            <li key={item.name} className="border-b last:border-b-0">
                                                {item.submenu ? (
                                                    <div>
                                                        <Button
                                                            variant="ghost"
                                                            className="w-full justify-between p-3 text-left text-md font-medium"
                                                            onClick={() => toggleSubmenu(item.name)}
                                                        >
                                                            {item.name}
                                                            <ChevronRight className={`h-5 w-5 transition-transform ${submenuOpen === item.name ? 'rotate-90' : ''}`} />
                                                        </Button>
                                                        {submenuOpen === item.name && (
                                                            <ul className="bg-accent">
                                                                {item.submenu.map((subItem) => (
                                                                    <li key={subItem.name} className="border-t">
                                                                        <a
                                                                            href={subItem.href}
                                                                            className="block p-2 pl-8 text-left text-sm bg-white dark:bg-black"
                                                                            onClick={closeAll}
                                                                        >
                                                                            {subItem.name}
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <a
                                                    href={item.href}
                                                    className="block p-3 text-left text-md font-medium hover:bg-accent"
                                                    onClick={closeAll}
                                                >
                                                    {item.name}
                                                </a>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}

