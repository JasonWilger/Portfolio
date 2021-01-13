const express = require("express");
const app = express();
const PORT = 4000;

// use the express-static middleware
app.use(express.static("public"))
app.use(express.static("views"))

// // define the first route
// app.get("/", function (req, res) {
//   res.send("`///`")
// })

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));