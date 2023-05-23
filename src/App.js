import "./App.css";
import Cards from "./components/cards/Cards";
import Nav from "./components/nav/Nav";
import About from "./components/about/About"
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
const URL = "https://rickandmortyapi.com/api/character";
const EMAIL = "f@mail.com"
const PASSWORD = "123456"

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false)
  // [], [c1], [c1, c2]
const {pathname} = useLocation()
const navigate = useNavigate()

useEffect(() => {
  !access && navigate('/');
}, [access]);

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
  const login = (userData) => {
    if(userData.email === EMAIL && userData.password === PASSWORD){
      setAccess(true)
      navigate("/home")
    }
  }
  return (
    <div className="App">
      
      {pathname !== "/"  && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login = {login}/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/detail/:id" element={<Detail />}/>
      </Routes>
      
    </div>
  );
}

export default App;
