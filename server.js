const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set("view enjine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

const todoList = [
    'Wash the car and change oil',
    'Go to the supermarket and make dinner',
    'Walk the dogs'
  ];

const complete = [
    "Finished eating"
];

//============== Express Routes Here =============
  
//default route
app.get('/', function(request, response) {
response.render("index.ejs", {todoList: todoList});
});

//submit button route
app.post("/newtodo", function(request, response) {
    console.log("Item has been submitted");
    const item = request.body.item;
    todoList.push(item); 
    response.redirect("/");
});

app.get('*', function(request, response) {
    response.send("<h1>Invalid Page</h1>");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
})