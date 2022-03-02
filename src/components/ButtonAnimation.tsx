import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type ButtonAnimationProps = {
  children: any
  style?: React.CSSProperties
}

function ButtonAnimation(props: ButtonAnimationProps): JSX.Element {
  const [clicked, setClicked] = React.useState<number>(0)
  const [animationComplete, setAnimationComplete] =
    React.useState<boolean>(false)

  const handleClick = () => {
    setClicked(clicked + 1)
  }
  const handleOnAnimationComplete = () => {
    setAnimationComplete(true)
  }
  // const handleOnAnimationStart = () => {
  //   setAnimationComplete(false)
  // }

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        onClick={handleClick}
        onAnimationComplete={handleOnAnimationComplete}
        style={props.style}
        key={clicked}
        initial={{ opacity: 0.4, transform: 'scale(.9)' }}
        animate={{ opacity: 1, transform: 'scale(1)' }}
        exit={{ opacity: 0.4, transform: 'scale(.9)' }}
        transition={{ duration: 0.15 }}
      >
        {React.cloneElement(props.children, {
          animationComplete: animationComplete,
        })}
      </motion.div>
    </AnimatePresence>
  )
}

export default ButtonAnimation
