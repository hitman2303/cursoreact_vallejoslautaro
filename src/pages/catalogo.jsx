import React from "react";
import { Container } from "react-bootstrap";
import ProductList from "../componentes/cards";
const Catalogo=()=>
    {
        return(
<Container className="mt-4">
    <ProductList cantidad={9} />
</Container>
        );
    };

export default Catalogo;