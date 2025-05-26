import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
function ProductList({ cantidad = 9}) {
  const [productos, setProductos] = useState([]);
  const [Cargando, setCargando] = useState(true);
const { añadir } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setCargando(false);
      })
      .catch(err => {
        console.error("Error al cargar la API", err);
        setCargando(false);
      });
  }, []);

  if (Cargando) {
    return <Container className="mt-4">Cargando productos...</Container>;
  }

  return (
    <Container className='mt-4'>
      <Row>
        {productos.slice(0, cantidad).map(producto => (
          <Col key={producto.id} md={4}>
            <Card className="m-2 h-94">
              <Card.Img variant="top" src={producto.image} style={{ height: "300px", objectFit: "contain" }} />
              <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>
                  <strong>Categoría:</strong> {producto.category}<br />
                  <strong>Precio:</strong> ${producto.price}
                </Card.Text>
<Button variant="success" onClick={() => añadir(producto)}>
  Agregar al carrito
</Button>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}


export default ProductList;
