
import React, { createContext, useState } from 'react';

export const PizzaContext = createContext();

export const PizzaContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 

  return (
    <PizzaContext.Provider value={{ cart, setCart }}>
      {children}
    </PizzaContext.Provider>
  );
};
