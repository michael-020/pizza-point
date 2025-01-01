import { motion } from "framer-motion";
import { useEffect } from "react";

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
            mass: 0.4,
            damping: 8,
            when: "beforeChildren",
            staggerChildren: 0.4
        }
    }
}

const childVariants = {
    hidden: {
        opacity: 0,
    },  
    visible: {
        opacity: 1,
        // transition: {
        //     delay: 1.5
        // }
    }
}

const Order = ({ pizza, setShowModal }: any) => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 1000 * 5)

    return () => clearTimeout(timer)
    
  }, [setShowModal])

  return (
    <motion.div className="container order"
        variants={contianerVariant}
        initial="hidden"
        animate="visible"
    >
      <h2 className="text-xl">{"Thank you for your order :)"}</h2>
      <motion.p
        variants={childVariants}
      >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
        variants={childVariants}
      >
        {pizza.toppings.map((topping: any) => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;