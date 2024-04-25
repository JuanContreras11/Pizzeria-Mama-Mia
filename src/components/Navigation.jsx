import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useContext } from 'react';

import { PizzaContext } from '../context/PizzaContext'; 
const Navigation = () => {
  const { cart } = useContext(PizzaContext); 

 
  const totalPrice = cart.reduce((total, pizza) => total + pizza.price, 0);

  return (
    <Navbar bg="success" variant="dark">
      <Container className="d-flex  justify-content-between ">
        <div>
        <Link to="/" className="text-white ms-3 text-decoration-none ">
          🍕 Pizzería Mamma Mía!
        </Link>
        
        </div>
        <Navbar.Brand as={Link} to="/carrito">🛒 Carrito ${totalPrice}</Navbar.Brand>
        
      </Container>
    </Navbar>
  );
};
export default Navigation;