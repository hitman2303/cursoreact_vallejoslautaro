import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user");
        if (savedToken && savedUser) {
            setToken(savedToken);
            setUser(savedUser);
        }
    }, []); {/* Todo esta hardcodeado, tendria que hacerse con base de datos*/}
    const login = (email, contraseña) =>{
        if (email === "ejemplo@gmail.com" && contraseña === "123456789") { 
            const TokenFalso = "1234567890abcdef"; // Simulamos un token
            setToken(TokenFalso);
            setUser (email);
            localStorage.setItem("token", TokenFalso);
            localStorage.setItem("user", email);
            return true; // Login exitoso
        }
        return false; // Login fallido
    };
    const logOut = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }; //esto sirve para cerrar sesion  y eliminar el token y el usuario del localstorage
return (
        <AuthContext.Provider value={{ token, user, login, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth = ()=> useContext(AuthContext);
//localstorage es un espacio dentro del navegador para poder guardar informacion.
//vamos a acceder al localstorage a traves de unas funciones de JS, y getitem son parte de localstorage para poder acceder a la informacion que tenemos guardada.