import express from "express";

const PORT = 4000;
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  } else {
    console.log("Allowed. You can access the server");
  }
  next();
};

const handleHome = (req, res) => {
  return res.send("<h1>Hello this is my server</h1>");
};

const handleLogin = (req, res) => {
  return res.send("Login Here");
};

const handleProtected = (req, res) => {
  return re.send("Welcome to private server");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", logger, handleHome);
app.get("/login", handleLogin);
app.get("/protected/", handleProtected);

const handleListening = () => console.log(`server listening on port http://localhost:${PORT} 💥`);

app.listen(PORT, handleListening);
