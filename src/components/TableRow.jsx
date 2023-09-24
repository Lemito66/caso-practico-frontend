import Image from 'react-bootstrap/Image';
import "../styles/image.css"
export function TableRow({
    id,
    name,
    description,
    logo,
    date_release,
    date_revision,
}) {
  return (
    <>
      <tr key={id}>
        <td><Image src={logo} roundedCircle className="image-small" /></td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{date_release}</td>
        <td>{date_revision}</td>
        <td><button>Clic</button></td>
      </tr>
    </>
  );
}
