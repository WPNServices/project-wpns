const express = require('express')
const app = express()
const port = 3000
app.listen(port, () => {
    console.log(`app running on port ${port}`)
})

app.use("/public", express.static(__dirname + "/public"))
app.use ("/assets",express.static(__dirname + "/assets"))

app.get(["/", "/index.html"], (req, res) => {
  res.sendFile(__dirname + "/index.html");
})
  app.get(["/", "/about.html"], (req, res) => {
    res.sendFile(__dirname + "/about.html");
  }) 


  app.get(["/", "/virtual.html"], (req, res) => {
    res.sendFile(__dirname + "/virtual.html");
  }) 

  app.get(["/", "/contact.html"], (req, res) => {
    res.sendFile(__dirname + "/contact.html");
  }) 
  app.get(["/", "/reminder.html"], (req, res) => {
    res.sendFile(__dirname + "/reminder.html");
  }) 

  app.get(["/", "/news.html"], (req, res) => {
    res.sendFile(__dirname + "/news.html");
  }) 