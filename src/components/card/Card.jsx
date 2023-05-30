import styled from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import {connect} from "react-redux"
import {useState, useEffect} from "react"
function Card({
  id,
  name,
  species,
  status,
  gender,
  origin,
  image,
  onClose,
  addFav, removeFav,myFavorites
}) {
  // props -> {name, gender, origin}
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav({name,
      species,
      status,
      gender,
      origin,
      image,})
      setIsFav(!isFav)
  }
  return (
    <div className={styled.container}>
      <div className={styled.buttonContainer}>
      {
        isFav ? (
            <button onClick={handleFavorite}>❤️</button>
        ) : (
            <button onClick={handleFavorite}>🤍</button>
        )
      }
      </div>
      <div className={styled.buttonContainer}>
        <button onClick={() => onClose(id)} className={styled.button}>
          X
        </button>
      </div>
      <h2 className={styled.props}>Nombre: {name}</h2>
      <h2 className={styled.props}>Status: {status}</h2>
      <h2 className={styled.props}>Species: {species}</h2>
      <h2 className={styled.props}>Gender: {gender}</h2>
      <h2 className={styled.props}>Origin: {origin}</h2>
      <img className={styled.image} src={image} alt="Not found" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character))
    }, 
    removeFav : (id) => {
      dispatch(removeFav(id))
    }
  }
}
// mapStateToProps, mapDispatchToProps
export default connect(mapStateToProps,mapDispatchToProps)(Card)
