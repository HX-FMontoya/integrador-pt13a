import styled from "./Card.module.css";
import { Link } from "react-router-dom";
export default function Card({
  id,
  name,
  species,
  status,
  gender,
  origin,
  image,
  onClose,
}) {
  // props -> {name, gender, origin}
  return (
    
    <div className={styled.container}>
      <div className={styled.buttonContainer}>
        <button onClick={() => onClose(id)} className={styled.button}>
          X
        </button>
      </div>
      <Link to={`/detail/${id}`}>
      <div>
      <h2 className={styled.props}>Nombre: {name}</h2>
      <h2 className={styled.props}>Status: {status}</h2>
      <h2 className={styled.props}>Species: {species}</h2>
      <h2 className={styled.props}>Gender: {gender}</h2>
      <h2 className={styled.props}>Origin: {origin}</h2>
      <img className={styled.image} src={image} alt="Not found" />
      </div></Link>
      
      
    </div>
  );
}
