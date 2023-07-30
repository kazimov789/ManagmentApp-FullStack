const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { DUserData,DUsersDataList,DLoginnedUserData } = require("./data/users");
const PORT = process.env.PORT | 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (_, res) => {
  res.json({ systemMessage: "Working,Not Problem" });
});

app.get("/users", (_, res) => {
    res.json(DUsersDataList);
  });

app.post("/login", (req, res) => {
  if (      
    req.body.email === DUserData.email &&
    req.body.password === DUserData.password
  ) {
    res.json({ token: "YourTOKEN-CODE",user:DLoginnedUserData });
  } else {
    res.sendStatus(404);
  }
});

app.get("/logout",(req,res)=>{
  res.json({ Message: "User is logouted" });
})

app.post("/register",(req,res)=>{
    res.json({ RegisterMSG: "Register" });
})

app.listen(PORT, () => {
  console.log("Server Is Working...");
});
