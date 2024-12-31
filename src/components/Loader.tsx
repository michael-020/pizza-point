import { motion } from "framer-motion"

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.5
            },
            y: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.25,
                ease: "easeOut"
            }
        }
    }
}

export const Loader = () => {
  return (
    <motion.div
        className="w-[10px] h-[10px] my-[40px] mx-auto rounded-full bg-white "
        variants={loaderVariants}
        animate="animationOne"
    >
        
    </motion.div>
  )
}
