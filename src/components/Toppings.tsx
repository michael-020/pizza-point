import {motion} from "framer-motion"
import { Link } from 'react-router-dom';

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
    }, 
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut"
      }
    }
}

const buttonVariants = {
    hidden: {
      opacity: 0,
      y: "30vh"
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
      }
    },
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

const Toppings = ({ addTopping, pizza }: any) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
        variants={contianerVariant}
        initial="hidden"
        animate="visible"
        exit={"exit"}
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
                whileHover={{
                    scale: 1.3,
                    originX: 0,
                    color: "#f8e112"
                }}
                transition={{
                    type: "spring",
                    stiffness: 300
                }}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>
        {
          pizza.toppings.length > 0 && (
            <Link to="/order">
              <motion.button
                  variants={buttonVariants as any}
                  whileHover={"hover"}
                  initial="hidden"
                  animate="visible"
                  whileTap={{
                      scale: 0.95
                  }}
              >
                Order
              </motion.button>
            </Link>
          )
        }
      

    </motion.div>
  )
}

export default Toppings;