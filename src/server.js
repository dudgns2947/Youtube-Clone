import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
  console.log(req);
  return res.send("Hello this is my server");
};

const handleLogin = (req, res) => {
  return res.send("Login Here");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`server listening on port http://localhost:${PORT} 💥`);

app.listen(PORT, handleListening);
