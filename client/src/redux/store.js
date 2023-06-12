import {createStore} from "redux"
import thunk from "redux-thunk"
import reducer from "./reducer"
// importar al reducer 
 // O(R) -> Actions 

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store