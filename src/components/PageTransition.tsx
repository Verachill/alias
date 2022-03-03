import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

export default function PageTranstition({
  children,
  leftToRight = false,
  rightToLeft = false,
  pageIsExit,
}: {
  children: JSX.Element
  leftToRight?: boolean
  rightToLeft?: boolean
  pageIsExit: boolean
}): JSX.Element {
  const startPosition: number =
    window.innerWidth * (leftToRight ? -1 : rightToLeft ? 1 : 0)

  return (
    <AnimatePresence>
      <motion.div
        key={+pageIsExit}
        initial={{ opacity: 0.2, x: startPosition }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0.2, x: startPosition }}
        transition={{ type: 'Inertia', stiffness: 100, duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
