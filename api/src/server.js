
const http = require("node:http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  res.writeHead(404, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify({
    error: "Ruta no encontrada"
  }));
});

server.listen(PORT, () => {
  console.log(`EmpleoU ejecutándose en http://localhost:${PORT}`);
});
