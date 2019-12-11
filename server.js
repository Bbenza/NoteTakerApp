
let express = require("express");
let apiRoutes = require("./routes/apiRoutes");		
let htmlRoutes = require("./routes/htmlRoutes");

let app = express();
let PORT = process.env.PORT || 3088;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(apiRoutes);
app.use(htmlRoutes);
  

app.listen(PORT, function() {
    console.log("Server running on PORT: " + PORT);
});