import Card from "./Card";

export default function Cards({ characters }) {
  // props -> { characters}

  return (
    <div>
      {characters.map(
        ({id, name, species, status, gender, origin, image }) => (
          <Card
            key={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        )
      )}
    </div>
  );
}
