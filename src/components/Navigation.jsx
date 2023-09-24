import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Navigation() {
  return (
    <>
      <div>Navigation</div>
      <Link to="/products-create">
        <Button variant="primary">Agregar</Button>
      </Link>
    </>
  );
}

export default Navigation;
