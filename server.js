const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

// use the express-static middleware
app.use(express.static("public"))
app.use(express.static("views"))

// define the first route
app.get('/photo', function (req, res,html) {
    res.sendFile(path.join(__dirname+'/photo.html'));
   });

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));