import { connect } from "react-redux"
import Card from "../card/Card"
function Favorites ({myFavorites}) {
    return (
        <div>
            {myFavorites?.map((fav)=>(
                <Card key={fav.id}
                id={fav.id}
                name={fav.name}
                status={fav.status}
                species={fav.species}
                gender={fav.gender}
                origin={fav.origin?.name}
                image={fav.image}/>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites)