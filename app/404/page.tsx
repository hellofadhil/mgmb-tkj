'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Meteors from '@/components/ui/meteors'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { ModeToggle } from '@/components/mode-toggle'

export default function NotFound() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className={`h-screen w-full flex items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-black' : 'bg-white'
        }`}
    >
      <Meteors number={20} />
      <div className="text-center z-10">
        <motion.h1
          className={`text-9xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'
            }`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.p
          className={`text-2xl mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Oops! Looks like you&apos;re lost in space.
        </motion.p>
        <div className='flex justify-center gap-4'>
          <Button asChild>
            <Link href="/">
              Back
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
