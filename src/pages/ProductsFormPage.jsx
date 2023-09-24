import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useForm } from "react-hook-form";
import { createProduct } from "../api/products.api";
import { useNavigate } from "react-router-dom";

function ProductsFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async data => {
    //console.log(data);
    await createProduct(data);
    navigate("/products");
  });
  return (
    <>
      <div>ProductsFormPage</div>
      <Form onSubmit={onSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el ID"
              {...register("id", { required: true })}
            />
          </Form.Group>
          {errors.id && <span>Este campo es requerido</span>}

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre"
              {...register("name", { required: true })}
            />
          </Form.Group>
          {errors.name && <span>Este campo es requerido</span>}
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa la descripción"
              {...register("description", { required: true })}
            />
          </Form.Group>
          {errors.description && <span>Este campo es requerido</span>}

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Logo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el logo"
              {...register("logo", { required: true })}
            />
          </Form.Group>
          {errors.logo && <span>Este campo es requerido</span>}
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Fecha Liberación</Form.Label>
            <Form.Control
              type="date"
              placeholder="Ingresa la fecha de liberación"
              {...register("date_release", { required: true })}
            />
          </Form.Group>
          {errors.date_release && <span>Este campo es requerido</span>}

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Fecha Revisión</Form.Label>
            <Form.Control
              type="date"
              placeholder="Ingresa la fecha de revisión"
              {...register("date_revision", { required: true })}
            />
          </Form.Group>
        </Row>
        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
        <button type="submit">Enviar</button>
      </Form>
    </>
  );
}

export default ProductsFormPage;
