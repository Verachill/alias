import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface propsInterface {
  children: any
  style?: React.CSSProperties
}

function ButtonAnimation(props: propsInterface): JSX.Element {
  const [clicked, setClicked] = React.useState(0)
  const handleClick = () => {
    setClicked(clicked + 1)
  }
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        onClick={handleClick}
        style={props.style}
        key={clicked}
        initial={{ opacity: 0.4, transform: 'scale(.9)' }}
        animate={{ opacity: 1, transform: 'scale(1)' }}
        exit={{ opacity: 0.4, transform: 'scale(.9)' }}
        transition={{ duration: 0.15 }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  )
}

export default ButtonAnimation
