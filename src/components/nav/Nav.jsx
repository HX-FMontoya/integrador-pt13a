import SearchBar from "../searchbar/SearchBar";
import styled from "./Nav.module.css"

const Nav = ({onSearch}) => {
    return (
      <div className={styled.container}>
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