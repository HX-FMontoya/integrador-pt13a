import Card from "../card/Card";
import styled from "./Cards.module.css"
export default function Cards({ characters, onClose }) {
  // props -> { characters} undefined
  return (
    <div className={styled.container}>
      {characters?.map(
        ({id, name, species, status, gender, origin, image }) => (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
          />
        )
      )}
    </div>
  );
}
