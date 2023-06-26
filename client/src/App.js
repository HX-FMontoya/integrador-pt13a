import "./App.css";
import Cards from "./components/cards/Cards";
import Nav from "./components/nav/Nav";
import Favorites from "./components/favorites/Favorites";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
const URL = "http://localhost:3001/rickandmorty/character";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  // [], [c1], [c1, c2]
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  // Version Async Await
  const onSearch = async (id) => {
    try {
      const { data } = await axios(`${URL}/${id}`);
      if (data.name) {
        setCharacters([...characters, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      window.alert(error.message);
    }
  };
  // Version promesas
  /* const onSearch = (id) => {
    axios(`${URL}/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters([...characters, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }; */
  const onClose = (id) => {
    const filtered = characters.filter((chars) => chars.id !== id);
    setCharacters(filtered);
  };
  // Antes de express
  /* const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  }; */
  // Despues de express
  // Version Async Await
  const login = async (userData) => {
    const URL = "http://localhost:3001/rickandmorty/login/";
    try {
      const { email, password } = userData;
      const { data } = await axios(
        `${URL}?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  // Version promesas
  /* const login = (userData) => {
    const URL = "http://localhost:3001/rickandmorty/login/";
    const { email, password } = userData;
    axios(`${URL}?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    });
  }; */
  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
