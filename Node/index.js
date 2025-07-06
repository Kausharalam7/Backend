// index.js
import { readFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";


const PORT = 3000;

const serveFile = async (res, filePath, contentType) => {
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch (err) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 page not found");
  }
};

const server = createServer((req, res) => {
  console.log("Request URL:", req.url);

  if (req.method === "GET") {
    if (req.url === "/") {
      return serveFile(res, path.join(__dirname, "public", "index.html"), "text/html");
    }

    if (req.url === "/index.css") {
      return serveFile(res, path.join(__dirname, "public", "index.css"), "text/css");
    }
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("404 page not found");
});

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
