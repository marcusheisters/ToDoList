const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {

    var today = new Date()
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { kindOfDay: day, newListItems: items });
});

// Handle post request for new list items
app.post("/", (req, res) => {
    items.push(req.body.newListItem);

    res.redirect("/");  // updates the root route with the new item
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
