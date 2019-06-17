let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:4200"
  })
);
let users = [
  { id: 1, name: "Jeffywin" },
  { id: 2, name: "Knight" },
  { id: 3, name: "UZI" },
  { id: 4, name: "MLXG" }
];

app.get("/users", function(req, res) {
  res.json(users);
});

app.get("/oneUser/:id", function(req, res) {
  const id = req.params.id;
  const data = users.filter(v => {
    return v.id === +id;
  });
  res.json(data[0]);
});

app.listen(4000, function() {
  console.log("server start at port 4000");
});
