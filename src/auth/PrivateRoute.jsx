import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

const PrivateRoute = ({ element }) => {
  const { user, loading } = useAuth();

  if (loading) {
    // Puedes mostrar un indicador de carga mientras se verifica la autenticación
    return <p>Cargando...</p>;
  }

  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;