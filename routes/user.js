import express from "express";

const router = express.Router();

router.get("/usertest", (req, res) => {
  res.send("user test successful");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  console.log(username);
  res.send("username is " + username);
});

export default router;
