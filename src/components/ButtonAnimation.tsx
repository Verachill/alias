import * as React from 'react';
import { AnimatePresence, motion } from "framer-motion";


interface propsInterface{
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
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                {props.children}            
            </motion.div>
        </AnimatePresence>
     );
}

export default ButtonAnimation;