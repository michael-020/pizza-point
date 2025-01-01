import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

const backDrop = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    }
}

const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "200px",
        opacity: 1,
        transition: {
            delay: 0.5
        }
    }
}

export const Modal = ({showModal} : any) => {
  return (
    <AnimatePresence mode="wait">
        {showModal && (
            <motion.div
                className="fixed top-0 left-0 w-full h-full z-1 bg-[rgba(0,0,0,0.5)] "
                variants={backDrop}
                initial="hidden"
                animate="visible"
                exit={"hidden"}
            >
                <motion.div
                    className="max-w-[400px] mx-auto py-[40px] px-[20px] bg-white rounded-xl text-center "
                    variants={modal}
                >
                    <p
                        className="font-bold text-[#444] "
                    >Want to make another pizza?</p>
                    <Link to={"/"} >
                        <button
                            className="text-[#444] border-[#444] font-bold mt-[20px] "
                            // onClick={() => setShowModal(false)}
                        >Start Again</button>
                    </Link>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}
