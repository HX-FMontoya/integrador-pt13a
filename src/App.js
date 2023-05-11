import './App.css';
import Card from './components/card/Card';
import Cards from './components/cards/Cards';
import SearchBar from './components/searchbar/SearchBar';
import characters, { Rick } from './data.js';
console.log(characters)

function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
         <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      </div>
   );
}

export default App;
