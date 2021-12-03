const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const {
  getEat,
  genEat,
  createEat,
  deleteEat,
  updateEat,
  getDrink,
  genDrink,
  createDrink,
  deleteDrink,
  updateDrink,
  getBeMerry,
  genBeMerry,
  createBeMerry,
  deleteBeMerry,
  updateBeMerry
} = require('./controllers/new2nola');

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/new2nola", getEat);
app.get("/api/new2nola/gen", genEat);
app.post("/api/new2nola", createEat);
app.delete("/api/new2nola/:index", deleteEat);
app.put("/api/new2nola/:index", updateEat);
app.get("/api/new2nola", getDrink);
app.get("/api/new2nola/gen", genDrink);
app.post("/api/new2nola", createDrink);
app.delete("/api/new2nola/:index", deleteDrink);
app.put("/api/new2nola/:index", updateDrink);
app.get("/api/new2nola", getBeMerry);
app.get("/api/new2nola/gen", genBeMerry);
app.post("/api/new2nola", createBeMerry);
app.delete("/api/new2nola/:index", deleteBeMerry);
app.put("/api/new2nola/:index", updateBeMerry);

app.listen(4000, () => console.log("Server running on 4000"));
