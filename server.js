const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors')
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
// Sample data
const users = [
  { id: '001', name: 'Balaji' },
  { id: '002', name: 'John' },
  { id: '003', name: 'Alice' },
];

app.use(bodyParser.json());

// Route to get user by ID
app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id === id);

  if (!user) {
    res.status(404).json({ error: 'User not found' });
  } else {
    res.json(user);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
