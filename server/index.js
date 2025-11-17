const express = require('express');
const fs = require('fs');
const path = require('path'); // Import the path module
const authenticateToken = require('./middleware/auth');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;
const USERS_FILE = path.join(__dirname, 'data/users.json'); // Use absolute path

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

app.get('/api/user-data', authenticateToken, (req, res) => {
  fs.readFile(USERS_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading users file');
    }

    const users = JSON.parse(data);
    const user = users.find(u => u.id === req.user.id);

    if (!user) {
      // If user is not in our DB, let's add them.
      // This is a simple example. In a real app, you might want to
      // create a new user record in your database.
      const newUser = {
        id: req.user.id,
        email: req.user.email,
        // Add any other data you want to store for the user
      };
      users.push(newUser);
      fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), err => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error saving new user');
        }
        res.json(newUser);
      });
    } else {
      res.json(user);
    }
  });
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
