import styled from "styled-components";
export default function SearchBar({ onSearch }) {
  const Div = styled.span`
    height: 50px;
  `;
  const Input = styled.input`
    background-color: rgba(22, 176, 193, 0.5);
  `;
  const Button = styled.button`
    background-color: black;
    color: white;
  `;
  return (
    <Div>
      <Input type="search" />
      <Button onClick={(id) => onSearch(id)}>Agregar</Button>
    </Div>
  );
}
