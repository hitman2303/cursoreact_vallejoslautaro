import {Navigate} from "react-router-dom";
import { useAuth } from "./Authcontext"; // Importa el hook useAuth para acceder al contexto de autenticación
// Componente de ruta protegida
function ProtectedRoute({ children }) {
const {token} = useAuth(); // Obtiene el token de autenticación del contexto
return token ? children : <Navigate to="/" />; // Si hay token, renderiza los hijos, de lo contrario redirige a la página de inicio
}
export default ProtectedRoute; // Exporta el componente para que pueda ser utilizado en otras partes de la aplicación