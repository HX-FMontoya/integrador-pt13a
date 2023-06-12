import { Div, Button, Input } from "../assets/styles";
import { useState } from "react";
export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <Div>
      <Input name="user" type="search" onChange={handleChange}/>
      <Button onClick={() => onSearch(id)}>Agregar</Button>
    </Div>
  );
}
