import Image from "react-bootstrap/Image";
import "../styles/image.css";
import { useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { deleteProduct } from "../api/products.api";
export function TableRow({
  id,
  name,
  description,
  logo,
  date_release,
  date_revision,
}) {
  const navigate = useNavigate();
  return (
    <>
      <tr key={id}>
        <td>
          <Image src={logo} roundedCircle className="image-small" />
        </td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{date_release}</td>
        <td>{date_revision}</td>
        <td>
          <NavDropdown title="Más" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1" onClick= {() => {
              navigate(`/products/${id}`);
              //console.log({id})
            }}>Editar</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" onClick={async () => {
              const accepted = window.confirm("¿Estás seguro de eliminar este producto?")
              if (accepted) {
                await deleteProduct(id);
                window.location.reload();
                //navigate("/products");
              }

            }}>Eliminar</NavDropdown.Item>
          </NavDropdown>
        </td>
      </tr>
    </>
  );
}
