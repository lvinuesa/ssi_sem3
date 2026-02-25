const express = require("express");
const app = express();

app.get("/xss", (req, res) => {
  // Vulnerabilidad XSS directa
  res.send(req.query.q);
});

app.listen(3000);
