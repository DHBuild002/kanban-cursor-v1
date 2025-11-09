const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./middleware/auth'); // Import the authentication middleware
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = process.env.PORT || 3001;
const USERS_FILE = './data/users.json';
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretjwtkey'; // Use environment variable for production

app.use(cors()); // Use the cors middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send('Username, email, and password are required');
  }

  fs.readFile(USERS_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading users file');
    }

    const users = JSON.parse(data);

    if (users.find(user => user.email === email)) {
      return res.status(400).send('User with this email already exists');
    }
    
    if (users.find(user => user.username === username)) {
      return res.status(400).send('User with this username already exists');
    }

    bcrypt.hash(password, 10, (err, passwordHash) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error hashing password');
      }

      const newUser = {
        id: uuidv4(),
        username,
        email,
        passwordHash,
      };

      users.push(newUser);

      fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), err => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error saving new user');
        }

        res.status(201).send('User created successfully');
      });
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }

  fs.readFile(USERS_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading users file');
    }

    const users = JSON.parse(data);
    const user = users.find(u => u.email === email);

    if (!user) {
      return res.status(400).send('Invalid credentials');
    }

    bcrypt.compare(password, user.passwordHash, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error comparing passwords');
      }

      if (!result) {
        return res.status(400).send('Invalid credentials');
      }

      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  });
});

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
