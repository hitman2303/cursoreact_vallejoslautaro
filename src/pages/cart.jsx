import { useCart } from '../context/CartContext';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';

function Cart() {
  const { cart, remover, actualizar } = useCart();

  if (cart.length === 0) {
    return <Container className="mt-4"><h3>El carrito está vacío</h3></Container>;
  }

  return (
    <Container className="mt-4">
      <h2>Carrito de compras</h2>
      {cart.map(item => (
        <Row key={item.id} className="mb-3 border-bottom pb-2">
          <Col md={2}><img src={item.image} alt={item.title} style={{ width: '100%' }} /></Col>
          <Col md={4}><h5>{item.title}</h5></Col>
          <Col md={2}>${item.price}</Col>
          <Col md={2}>
            <input
              type="number"
              min="1"
              value={item.cantidad}
              onChange={e => actualizar(item.id, parseInt(e.target.value))}
              className="form-control"
            />
          </Col>
          <Col md={2}>
            <Button
  variant="danger"
  onClick={() => {
    Swal.fire({
      title: '¿Eliminar producto?',
      text: `¿Estás seguro que querés eliminar "${item.title}" del carrito?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        remover(item.id);
        Swal.fire({
          title: 'Eliminado',
          text: `"${item.title}" fue eliminado del carrito.`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  }}
>
  Eliminar
</Button>

          </Col>
        </Row>
      ))}
      <h4 className="mt-3">
        Total: ${cart.reduce((acc, item) => acc + item.price * item.cantidad, 0).toFixed(2)}
      </h4>
    </Container>
  );
}

export default Cart;
