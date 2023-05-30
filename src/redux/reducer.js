const initialState = {
    myFavorites: [],
}

export default function reducer(state=initialState, {type, payload}){
    // console.log(action) -> {type: , payload: }
    switch (type) {
        case "ADD_FAV":
            return {
                ...state, 
                myFavorites: [...state.myFavorites, payload ]
            }
        case "REMOVE_FAV":
        const filtered = state.myFavorites.filter((char)=> parseInt(char.id) !== parseInt(payload))
        console.log(filtered)
        return {
            ...state, 
            myFavorites: filtered
        }
    
        default:
            return state
    }
}