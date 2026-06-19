const express = require("express");
const app = express();
const port = 3000;

// app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello Home!')
// })
// app.post('/', (req, res) => {
//   let body = req.body;
//   console.log(body)
//   res.send('Hello POST!')
// })


// req.params are used to capture values from the URL path. They are defined in the route path using a colon (:) followed by a parameter name. When a request is made to that route, the value of the parameter can be accessed using req.params.parameterName. This allows for dynamic routing and handling of different values in the URL.
let user = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    position: "Frontend Developer",
    department: "Engineering",
    salary: 65000,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    position: "Backend Developer",
    department: "Engineering",
    salary: 72000,
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    position: "UI/UX Designer",
    department: "Design",
    salary: 58000,
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    position: "Project Manager",
    department: "Management",
    salary: 85000,
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@example.com",
    position: "DevOps Engineer",
    department: "Infrastructure",
    salary: 78000,
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user", (req, res) => {
  res.json(user);
});
app.get("/user/:id", (req, res) => {
  let id = req.params.id;
  let foundUser = user.find((user) => user.id == id);
  if (!foundUser) {
    return res.send("User not found");
  }

  res.json(foundUser);
});


// Re.query parameters are used to send data to the server as part of the URL. They are typically used for filtering, sorting, or searching data. Query parameters are appended to the URL after a question mark (?) and are represented as key-value pairs separated by an equal sign (=). Multiple query parameters can be included by separating them with an ampersand (&).   
app.get('/search',(req,res)=>{
  let query = req.query;
  res.json(query);
  console.log(query);
});









app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
