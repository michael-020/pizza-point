import { useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import { AnimatePresence } from 'framer-motion';

interface Pizza {
  base: string;
  toppings: string[];
}


function App() {
  const [pizza, setPizza] = useState<Pizza>({ base: "", toppings: [] });
  const location = useLocation()

  const addBase = (base: any) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping: string) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    
      <>
        <Header />
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} />
            <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />} />
            <Route path="/order" element={<Order pizza={pizza} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </>

  );
}

export default App;