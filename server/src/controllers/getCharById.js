// Con express
require("dotenv").config();
const { URL } = process.env;
const axios = require("axios");

// Version async await
const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    /* const { status, name, species, origin, image, gender, error } = await axios(
      `${URL}/${id}`
    ).data; */
    const { data } = await axios(`${URL}/${id}`);
    const { status, name, species, origin, image, gender, error } = data;
    const character = { id, status, name, species, origin, image, gender };
    return name
      ? res.json(character)
      : res.status(404).json({ message: error });
  } catch (reason) {
    return res.status(500).json({ message: reason });
  }
};

// Version promesas
/* const getCharById = (req, res) => {
  const { id } = req.params;
  axios(`${URL}/${id}`)
    .then(({ data }) => {
      // data {}
      // console.log(data);
      const { id, status, name, species, origin, image, gender, error } = data;
      const character = { id, status, name, species, origin, image, gender };
      return name
        ? res.json(character)
        : res.status(404).json({ message: error });
    })
    .catch((reason) => {
      return res.status(500).json({ message: reason });
    });
}; */
module.exports = getCharById;
// Sin express
/* require("dotenv").config();
const axios = require("axios");
const { URL } = process.env;
const getCharById = (res, id) => {
  axios(`${URL}/${id}`)
    .then(({ data }) => {
      const {
        name,
        gender,
        species,
        origin = origin.name,
        image,
        status,
      } = data;
      const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };
      // res.statusCode = 200;
      // res.setHeader("Content-Type", "application/json");
      // res.end(JSON.stringify(character)); 
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((reason) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(reason.message);
    });
};

module.exports = getCharById; */
