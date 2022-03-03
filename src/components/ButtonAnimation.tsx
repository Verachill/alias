import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type ButtonAnimationProps = {
  children: any
  style?: React.CSSProperties
  additionalTrigger?: boolean
}

function ButtonAnimation(props: ButtonAnimationProps): JSX.Element {
  const [clicked, setClicked] = React.useState(0)

  const handleClick = () => {
    setClicked(clicked + 1)
  }
  console.log(clicked)

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        onClick={handleClick}
        style={props.style}
        key={clicked}
        initial={{ opacity: 0.4, transform: 'scale(.9)' }}
        animate={{ opacity: 1, transform: 'scale(1)' }}
        exit={{ opacity: 0.4, transform: 'scale(.9)' }}
        transition={{ duration: 0.2 }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  )
}

export default ButtonAnimation
