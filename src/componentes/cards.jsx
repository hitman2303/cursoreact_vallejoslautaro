import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';

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
                <Button
  variant="success"
  onClick={() => {
    Swal.fire({
      title: '¿Agregar al carrito?',
      text: `¿Querés agregar "${producto.title}" al carrito?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#28a745', // verde
      cancelButtonColor: '#d33', // rojo
      confirmButtonText: 'Sí, agregar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        añadir(producto);
        Swal.fire({
          title: 'Agregado',
          text: `"${producto.title}" fue agregado al carrito`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  }}
>
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
