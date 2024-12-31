import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const contianerVariant = {
    hidden: {
        opacity: 0,
        x: "100vw"
    },
    visible: {
        opacity: 1,
        x: "0",
        transition: {
            type: "spring",
            stiffness: 50,
            delay: 0.1,
        }
    }
}

const nextVariants = {
    hidden: {
        y: "30vh"
    },
    visible: {
        y: 0,
        transition: {
            type: "spring",
            stiffness: 120
        }
    }
}

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

const Base = ({ addBase, pizza }: any) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
        // initial={{
        //     x: "100vw"
        // }}
        // animate={{
        //     x: 0
        // }}
        variants={contianerVariant}
        initial="hidden"
        animate="visible"
        // transition={{
        //     type: "spring",
        //     stiffness: 50,
        //     delay: 0.5,
        // }}
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
                whileHover={{
                    scale: 1.15,
                    originX: 0,
                    color: "#f8e112",
                }}
                transition={{
                    type: "spring",
                    stiffness: 300
                }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
            variants={nextVariants}
            // initial="hidden"
            // animate="visible"
            // initial={{
            //     y: "10vh"
            // }}
            // animate={{  
            //     y: 0,
            // }}
            // transition={{
            //     type: "spring",
            //     stiffness: 120
            // }}
        >
          <Link to="/toppings">
            <motion.button
                // whileHover={{
                //     scale: 1.15,
                //     boxShadow: "0px 0px 8px rgb(255,255,255)",
                //     textShadow: "0px 0px 8px rgb(255,255,255)"
                // }}
                variants={buttonVariants as any}
                whileHover={"hover"}
                whileTap={{
                    scale: 0.95
                }}
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;