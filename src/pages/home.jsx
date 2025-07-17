import React from "react";
import { Container } from "react-bootstrap";
import ProductList from "../components/cards";

const Home=()=>
    {
        return(
<Container className="mt-4">
  <h1>Productos</h1>
  <ProductList cantidad={6} />
</Container>
        );
    };

export default Home;