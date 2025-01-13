'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

 const Meteors = ({ number }: { number: number }) => {
  const [meteors, setMeteors] = useState<Array<{ id: number, size: number, duration: number, left: string }>>([])

  useEffect(() => {
    const newMeteors = Array.from({ length: number }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 3) + 1,
      duration: Math.floor(Math.random() * 3) + 2,
      left: `${Math.floor(Math.random() * 100)}%`,
    }))
    setMeteors(newMeteors)
  }, [number])

  return (
    <>
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          className="absolute top-0 w-0.5 h-0.5 bg-white rounded-full shadow-lg"
          style={{
            left: meteor.left,
            width: `${meteor.size}px`,
            height: `${meteor.size * 30}px`,
          }}
          animate={{
            top: ['0%', '100%'],
            opacity: [1, 0],
          }}
          transition={{
            duration: meteor.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </>
  )
}

export default Meteors