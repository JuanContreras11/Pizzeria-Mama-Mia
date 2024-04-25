import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import PizzaCatalogo from './views/PizzaCatalogo';
import PizzaDetail from './views/PizzaDetail';
import Carrito from './views/Carrito';
import { PizzaContextProvider } from './context/PizzaContext';
import { Routes } from 'react-router-dom';


function App() {
  return (
    <PizzaContextProvider>
      <Routes>
        <Route>
          <Route exact path="/" element={<PizzaCatalogo/>} />
          <Route path="/pizza/:id" element={<PizzaDetail />} />
          <Route path="/carrito" element={<Carrito/>} />
        </Route>
      </Routes>
    </PizzaContextProvider>
  );
}

export default App;
