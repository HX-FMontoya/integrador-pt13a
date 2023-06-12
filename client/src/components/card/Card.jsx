import styled from "./Card.module.css";
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import { addFav, removeFav } from "../../redux/actions";
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
    console.log(myFavorites)
    myFavorites.forEach((fav) => {
      console.log(fav.id, id)
       if (fav.id === id) {
        console.log("si")
          setIsFav(true);
       }
    });
 }, [myFavorites, id]);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav({id, name,
      species,
      status,
      gender,
      origin,
      image,})
      setIsFav(!isFav)
  }
  return (
    
    <div className={styled.container}>
      <div style={{display: "flex", justifyContent: "space-between"}}>
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
      </div>
      
      <Link to={`/detail/${id}`}>
      <div>
      <h2 className={styled.props}>Nombre: {name}</h2>
      <h2 className={styled.props}>Status: {status}</h2>
      <h2 className={styled.props}>Species: {species}</h2>
      <h2 className={styled.props}>Gender: {gender}</h2>
      <h2 className={styled.props}>Origin: {origin}</h2>
      <img className={styled.image} src={image} alt="Not found" />
      </div></Link>
      
      
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
