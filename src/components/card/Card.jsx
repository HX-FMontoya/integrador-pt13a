import styled from "./Card.module.css";
export default function Card({
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
        <button onClick={() => onClose()} className={styled.button}>
          X
        </button>
      </div>
      <h2 className={styled.props}>Nombre: {name}</h2>
      <h2 className={styled.props}>Status: {status}</h2>
      <h2 className={styled.props}>Species: {species}</h2>
      <h2 className={styled.props}>Gender: {gender}</h2>
      <h2 className={styled.props}>Origin: {origin}</h2>
      <img className={styled.image} src={image} alt="Not found" />
    </div>
  );
}
