const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { DUserData } = require("./data/users");
const PORT = process.env.PORT | 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ systemMessage: "Working,Not Problem" });
});


app.post("/login", (req, res) => {
  if (
    req.body.email === DUserData.email &&
    req.body.password === DUserData.password
  ) {
    res.json({ token: "YourTOKEN-CODE" });
  } else {
    res.sendStatus(404);
  }
});

app.post("/register",(req,res)=>{
    res.json({ token: "Register" });
})

app.listen(PORT, () => {
  console.log("Server Is Working...");
});
