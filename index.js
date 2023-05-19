const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello world"));
app.get("/express", (req, res) => res.send("Express"));
app.get("/example", (req, res) => res.send("Example"));

app.listen(port, () => console.log(`Server is listening on port ${port}`));
