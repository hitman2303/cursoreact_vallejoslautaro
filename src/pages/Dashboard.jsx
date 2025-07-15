
import { Container, Card,} from "react-bootstrap";

export default function Dashboard() {
//Los links de inicio y agregar productos tienen que ir con inicio = home, agregar productos = listaProductos
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card style={{ width: "30rem" }}>
          <Card.Body className="text-center">
            <Card.Title>Dashboard</Card.Title>
            <Card.Text className="mb-4">
              ¡Hola, Bienvenido al panel de administrador.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}