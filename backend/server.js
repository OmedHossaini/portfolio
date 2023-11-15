const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
useNewUrlParser: true,
useUnifiedTopology: true,
};

app.use(bodyParser.json());

app.post('/api/Contact', async (req, res) => {
try {
    const { name, email, message } = req.body;

    const client = new MongoClient(MONGO_URI, options);
    await client.connect();

    const db = client.db('Portfolio');
    const collection = db.collection('Contacts');

    await collection.insertOne({ name, email, message });

    await client.close();

    res.status(200).json({ message: 'Form submission successful!' });
} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
}
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
