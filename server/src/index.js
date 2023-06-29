require("dotenv").config();
const { PORT } = process.env;
const server = require("./app");

server.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
