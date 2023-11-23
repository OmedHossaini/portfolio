// Server code
'use strict';

const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(bodyParser.json());

const connectToMongo = async () => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    return client;
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error);
    throw error;
  }
};

const saveContactToDatabase = async (contactData) => {
  const client = await connectToMongo();

  try {
    const database = client.db('Portfolio');
    const contactsCollection = database.collection('Contacts');
    await contactsCollection.insertOne(contactData);
  } catch (error) {
    console.error('Error saving contact to database: ', error);
    throw error;
  } finally {
    await client.close();
  }
};

app.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await saveContactToDatabase({
      name,
      email,
      message,
    });

    res.status(200).json({
      status: 200,
      success: true,
      message: 'Contact saved successfully!',
    });
  } catch (error) {
    console.error('Error processing contact form: ', error);
    res.status(500).json({
      status: 500,
      success: false,
      message: 'Internal Server Error',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
