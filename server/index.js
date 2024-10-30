// server/index.js
const express = require('express');
const path = require('path'); // Import path module
const checkIp = require('./middleware/checkIp');
const blogRoutes = require('./routes/blogs');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve the admin page at the /api/admin route
app.use('/api/admin', checkIp, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html')); // Serve the admin page
});

// Blog routes for handling blog-related API requests
app.use('/api/blogs', blogRoutes);

// Start the server on port 5000
app.listen(5000, () => console.log('Server running on port 5000'));
