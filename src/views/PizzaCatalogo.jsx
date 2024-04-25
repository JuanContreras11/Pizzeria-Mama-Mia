import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import pizzas from '../util/pizzas.json';
import { PizzaContext } from '../context/PizzaContext'; 
import Navigation from '../components/Navigation';
import './PizzaCatalogo.css';

const PizzaCatalogo = () => {
  const { cart, setCart } = useContext(PizzaContext); 
  const addToCart = (pizza) => {
    
    setCart([...cart, pizza]);
  };

  return (
    <Container className="text-center">
      <Navigation />
      <div className="portada">
        <h1>Catálogo de Pizzas</h1>
        <h3>¡Tenemos las mejores pizzas que podrás encontrar!</h3>
        <hr />
      </div>

      <div className="gallery">
        {pizzas.map((pizza) => (
          <div className="imagen" key={pizza.id}>
            <img src={pizza.img} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <p>
              <strong>Ingredientes: </strong>
            </p>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>🍕{ingredient}</li>
              ))}
            </ul>
            <div className="cajita">
              <p className="precioCat">Precio: ${pizza.price}</p>
              <div className="botones">
                <Link to={`/pizza/${pizza.id}`} className="btn btn-primary">
                  Ver Más
                </Link>
                <button
                  onClick={() => addToCart(pizza)}
                  className="btn btn-danger"
                >
                  Añadir al carrito 🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PizzaCatalogo;
