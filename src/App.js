import "./App.css";
import Cards from "./components/cards/Cards";
import Nav from "./components/nav/Nav";
import About from "./components/about/About"
import Detail from "./components/detail/Detail";
import { useState } from "react";
import axios from "axios";
import {Routes, Route} from "react-router-dom"
const URL = "https://rickandmortyapi.com/api/character";

function App() {
  const [characters, setCharacters] = useState([]);
  // [], [c1], [c1, c2]

  const onSearch = (id) => {
    axios(`${URL}/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters([...characters, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((error) => {
        window.alert("Ese id no existe");
      });
  };
  const onClose = (id) => {
    const filtered = characters.filter((chars) => chars.id !== id);
    setCharacters(filtered);
  };
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/detail/:id" element={<Detail />}/>
      </Routes>
      
    </div>
  );
}

export default App;
