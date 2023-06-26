import axios from "axios";
// Version Async Await
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  try {
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log(error);
  }
};
// Version promesas
/* export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    });
  };
}; */

//Async Await
export const removeFav = (id) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    return async (dispatch) => {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};
// Version promesas
/* export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    });
  };
}; */

export function filterCards(gender) {
  return {
    type: "FILTER",
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: "ORDER",
    payload: order,
  };
}
