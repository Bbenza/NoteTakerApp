let router = require("express").Router();
let path = require("path");

router.get("/index", function(req, res) {
  //from  routes folder to the public folder and find index html file
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/notes", function(req, res) {
  //from routes folder to the public folder and find note html file
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});


module.exports = router;
