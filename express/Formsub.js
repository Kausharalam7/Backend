import express from "express";
import path from "path";
import { fileURLToPath } from "url"; 

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "public", "form.html");
  res.sendFile(filePath);
});

app.use(express.urlencoded());

// app.get("/contact", (req, res) => {
//   console.log(req.query);  
//   res.redirect("/");
// });

app.post("/contact", (req, res) => {
  console.log(req.body);  
  res.redirect("/");
});


const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server working at http://localhost:${PORT}`);
});
