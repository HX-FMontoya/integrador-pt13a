import SearchBar from "../searchbar/SearchBar";
import styled from "./Nav.module.css"
import {Link} from "react-router-dom"

const Nav = ({onSearch}) => {
    return (
      <div className={styled.container}>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <SearchBar onSearch={onSearch} />
      </div>
    );
}

/* class Nav extends React.Component {
    constructor ()
    render(){
        return (
            <div>
        <h1>Navbar</h1>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
        )
    }
} */

export default Nav