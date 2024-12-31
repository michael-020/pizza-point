import { motion, useCycle } from "framer-motion"

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
    },
    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
            y: {
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeOut",
            }
        }
    }
}

export const Loader = () => {
    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo")

  return (
    <div>
        <motion.div
            className="w-[10px] h-[10px] my-[40px] mx-auto rounded-full bg-white "
            variants={loaderVariants}
            animate={animation}
            >
        </motion.div>
        <div
            className="cursor-pointer "
            onClick={() => {
                cycleAnimation()
            }}
        >Cycle Loader</div>
    </div>
  )
}
