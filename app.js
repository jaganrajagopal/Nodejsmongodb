const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const mongoDBURI = process.env.MONGO_DB_URI;
//#mongoDBURI = "mongodb://mongo:27017/bookstore"

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
