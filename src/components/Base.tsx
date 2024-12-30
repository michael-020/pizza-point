import { Link } from 'react-router-dom';
import {motion} from "framer-motion"

const contianerVariant = {
    hidden: {
        opacity: 0,
        x: "100vw"
    },
    visible: {
        opacity: 1,
        x: "0"
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
        transition={{
            type: "spring",
            stiffness: 50,
            delay: 0.5,
        }}
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
            initial={{
                y: "10vh"
            }}
            animate={{  
                y: 0,
            }}
            transition={{
                type: "spring",
                stiffness: 120
            }}
        >
          <Link to="/toppings">
            <motion.button
                className='hover:shadow-[0_0px_8px_0_rgba(255,255,255)] '
                whileHover={{
                    scale: 1.15,
                    textShadow: "0px 0px 8px rgb(255,255,255)"
                }}
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