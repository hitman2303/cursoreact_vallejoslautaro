import React from "react";
import { Container } from "react-bootstrap";
import ProductList from "../components/cards";

const Descuentos=()=>
    {
        return(
<Container className="mt-4">
    <h1>Descuentos</h1>
   <ProductList cantidad={3} />
</Container>
        );
    };

export default Descuentos;