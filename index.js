const express = require("express");
const data = require("./data");

// Initialize App
const app = express();

// Assign route
app.use("/", (req, res, next) => {
  /* This is assigning the query parameters to the variable `filters`. */
  const filters = req.query;
  /* This is a for loop that loops through the filters object and checks if the user object has the
  same value as the filter. If it does, it will return true and add it to the filteredUsers array. */
  const filteredUsers = data.filter(user => {
    /* This is a way to set a variable to true and then check if it is true. If it is true, it will
    continue to the next line of code. If it is false, it will stop the loop and not continue to the
    next line of code. */
    let isValid = true;
    for (key in filters) {
      console.log(key, user[key], filters[key]);
      isValid = isValid && user[key] == filters[key];
    }
    return isValid;
  });
  res.send(filteredUsers);
});


// Start server on PORT 5000
app.listen(5000, () => {
  console.log("Server started!");
});
