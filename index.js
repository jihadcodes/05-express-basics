const express = require('express');
const app = express()
const port = 3000

// app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello Home!')
// })
// app.post('/', (req, res) => {
//   let body = req.body;
//   console.log(body)
//   res.send('Hello POST!')
// })


let user = [
  {
    "id": 1,
    "name": "John Smith",
    "email": "john.smith@example.com",
    "position": "Frontend Developer",
    "department": "Engineering",
    "salary": 65000
  },
  {
    "id": 2,
    "name": "Sarah Johnson",
    "email": "sarah.johnson@example.com",
    "position": "Backend Developer",
    "department": "Engineering",
    "salary": 72000
  },
  {
    "id": 3,
    "name": "Michael Brown",
    "email": "michael.brown@example.com",
    "position": "UI/UX Designer",
    "department": "Design",
    "salary": 58000
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "email": "emily.davis@example.com",
    "position": "Project Manager",
    "department": "Management",
    "salary": 85000
  },
  {
    "id": 5,
    "name": "David Wilson",
    "email": "david.wilson@example.com",
    "position": "DevOps Engineer",
    "department": "Infrastructure",
    "salary": 78000
  }
]

app.get('/', (req, res) => {
  res.json(user)
})
app.get('/user/:id', (req, res) => {
  let id = req.params.id;
  let foundUser = user.find((user) => (user.id == id));
  if(!foundUser){
    return res.send('User not found')
  }

  res.json(foundUser)
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})