import { useEffect, useState } from "react";
import { getAllProducts } from "../api/products.api";
import Table from "react-bootstrap/Table";
import { TABLEHEADERS } from "../data";
import {TableRow} from "./TableRow"

export function ProductsList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function loadProducts() {
      const response = await getAllProducts();
      setProducts(response.data);
    }
    loadProducts();
  }, []);
  return (
    <>
      <div>ProductsList</div>
      <Table responsive>
        <thead>
          <tr>
            {TABLEHEADERS.map(({ id, name }) => (
              <th key={id}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map(
            ({ id, name, description, logo, date_release, date_revision }) => (
              <TableRow
                key={id}
                id={id}
                name={name}
                description={description}
                logo={logo}
                date_release={date_release}
                date_revision={date_revision}
              />
            )
          )}
        </tbody>
      </Table>
    </>
  );
}

export default ProductsList;
