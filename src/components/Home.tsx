import { Link } from 'react-router-dom';
import {motion} from "framer-motion"

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.3,
            repeat: Infinity,
            repeatType: "reverse" 
        }
    }
}

const Home = () => {
  return (
    <motion.div className="home container "
        initial={{
            opacity:0,
        }}
        animate={{
            opacity:1,
        }}
        transition={{
            duration: 1.5,
        }}
    >
      <motion.h2
        initial={{
            fontSize: "0px",

            opacity: 0,
        }}
        animate={{
            fontSize: "50px",
            opacity: 1,

        }}
        transition={{
            duration: 1,
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
            variants={buttonVariants as any}
            whileHover="hover"
            // animate="visible"
            // whileHover={{
            //     scale: 1.15,
            //     boxShadow: "0px 0px 8px rgb(255,255,255)",
            //     textShadow: "0px 0px 8px rgb(255,255,255)"
            // }}
            // whileTap={{
            //     scale: 0.95
            // }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;