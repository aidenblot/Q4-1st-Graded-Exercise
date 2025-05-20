// Loads the express module
const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const path = require("path");

// Creates our express server
const app = express();
const port = 3000;

// Serves static files (we need it to import a css file)
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

// Render the initial page with the input form
app.get("/", (req, res) => {
  res.render("index");
});

// Handle POST request to /happy
app.post("/happy", (req, res) => {
  // Access the data sent from the form
  const celebrant = req.body.celebrant;
  const gender = req.body.gender;
  const guests = req.body.guests.split(",").map(name => name.trim());

  // Validate user input
  if (!celebrant || !gender || guests.length === 0) {
    return res.send("All fields are required. Please go back and fill in the form.");
  }

  // Generate the Happy Birthday song
  const songLines = [
    "Happy",
    "birthday",
    "to",
    "you",
    "Happy",
    "birthday",
    "to",
    "you",
    `Happy birthday to ${celebrant}!`,
    "Happy",
    "birthday",
    "to",
    "you"
  ];

  // Prepare the output for the song
  let output = "";
  const totalPeople = guests.length;
  const totalLines = songLines.length;

  // Repeat the song until everyone has sung at least once
  for (let i = 0; i < totalLines; i++) {
    const singerIndex = i % totalPeople;
    output += `${guests[singerIndex]}: ${songLines[i]}\n`;
  }

  // Determine the correct pronoun for the Good Fellow song
  const pronoun = gender === "male" ? "he" : "she";

  // Render the happy.hbs view with the generated song and pronoun
  res.render("happy", { song: output, pronoun: pronoun });
});

// Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));
