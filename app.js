// app.js

const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogRoutes');

app.use(express.json()); // for parsing application/json
app.use('/api/blogs', blogRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
