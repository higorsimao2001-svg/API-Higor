const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(3005, () => {
  console.log("Servidor on");
});

app.get("/:nome", (req, res) => {
  const { nome } = req.params;
  res.status(200).json({
    mensagem: `Hello ${nome}!`
  });
});