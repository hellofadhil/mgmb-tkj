"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button, type ButtonProps } from "@/components/ui/button"
import Link from "next/link"

export const InteractiveButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button ref={ref} {...props} className="bg-redbazma hover:bg-redbazma hidden md:flex">
        <Link href="/login" className="hidden md:flex">{children}</Link>
      </Button>
    </motion.div>
  )
})
InteractiveButton.displayName = "InteractiveButton"

