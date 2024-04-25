import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";
import "./Carrito.css";

const Cart = () => {
  const { cart, setCart } = useContext(PizzaContext);
  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };
  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <Container className="contenedor">
      <Navigation />
      <h1 className="m-4">Carrito de Compras</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <p className="carrito">
            <img src={item.img} alt={item.name} />
            {item.name} - ${item.price} 
            
            <button
              onClick={() => removeFromCart(item)}
              className="btn btn-danger"
            >
              Eliminar
            </button>
            Cantidad: {item.quantity}
            <button
              onClick={() => addToCart(pizza)}
              className="btn btn-success"
            >
              Agregar
            </button>
          </p>
          <hr />
        </div>
      ))}
      <p className="total">Total a pagar: ${total}</p>
    </Container>
  );
};

export default Cart;

