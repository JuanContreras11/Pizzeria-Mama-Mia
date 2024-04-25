import React from "react";
import { useParams } from "react-router-dom";
import pizzas from "../util/pizzas.json";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PizzaDetail.css";
import Navigation from "../components/Navigation";

const PizzaDetail = () => {
  const { id } = useParams();
  const pizza = pizzas.find((p) => p.id === id);

  if (!pizza) {
    return <p>Pizza no encontrada</p>;
  }

  return (
    <Container className="contenedor">
      <Navigation />
      <div className="caja">
        <img src={pizza.img} alt={pizza.name} />
        <div className="detalles">
          <h1>{pizza.name}</h1>
          <hr />
          <p>{pizza.desc}</p>
          <p><strong>Ingredientes: </strong></p>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>🍕{ingredient}</li>
            ))}
          </ul>
          <p className="precio"> <strong>Precio: ${pizza.price}</strong></p>
        </div>
      </div>
    </Container>
  );
};

export default PizzaDetail;
