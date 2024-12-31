import { motion } from "framer-motion";

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

const Order = ({ pizza }: any) => {
  return (
    <motion.div className="container order"
        variants={contianerVariant}
        initial="hidden"
        animate="visible"
    >
      <h2>{"Thank you for your order :)"}</h2>
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