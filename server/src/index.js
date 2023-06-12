const http = require("http");
const data = require("./utils/data");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;
    if (url.includes("/rickandmorty/character")) {
      // /rickandmorty/character/71
      // [] -> "7" -> 7
      const id = Number(url.split("/").at(-1));
      // [{},{},{}]
      const personaje = data.find((personaje) => personaje.id === id);
      // personaje -> {}
      if (personaje) {
        // personaje -> objeto
        res.writeHead(200, { "Content-Type": "application/json" });
        //
        res.end(JSON.stringify(personaje));
      } else {
        // personaje -> objeto
        res.writeHead(404, { "Content-Type": "application/json" });
        //
        res.end(JSON.stringify({ message: "Character not found" }));
      }
    } else {
      res.writeHead(403, { "Content-Type": "application/json" });
      //
      res.end(JSON.stringify({ message: "Route not found" }));
    }
  })
  .listen(PORT, "localhost", null, () => {
    console.log(`Listening on port: ${PORT}`);
  });
