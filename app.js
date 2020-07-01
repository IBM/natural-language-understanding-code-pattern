const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const path = require('path');
const express = require('express');
const app = express();
require('./config/express')(app);

// For starter kit env.
require('dotenv').config({
  silent: true
});
const pEnv = process.env;

if (pEnv.service_watson_natural_language_understanding && !pEnv.VCAP_SERVICES && !pEnv.NATURAL_LANGUAGE_UNDERSTANDING_APIKEY && !pEnv.NATURAL_LANGUAGE_UNDERSTANDING_URL && !pEnv.NATURAL_LANGUAGE_UNDERSTANDING_USERNAME) {
  // If we don't have the expected environment variables, use the starter kit apikey and url.
  let skitJson = JSON.parse(pEnv.service_watson_natural_language_understanding);
  process.env.NATURAL_LANGUAGE_UNDERSTANDING_APIKEY = skitJson.apikey;
  process.env.NATURAL_LANGUAGE_UNDERSTANDING_URL = skitJson.url;
}

let client;
try {
  client = new NaturalLanguageUnderstandingV1({
    // Remember to place the credentials in the .env file. Read the README.kd file!
    version: '2020-01-01',
  });
} catch (err) {
  console.error('Error creating service client: ', err);
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.post('/api/analyze', async (req, res, next) => {
  try {
    const { result } = await client.analyze(req.body);
    return res.json(result);
  } catch (error) {
    console.log(error);
    if (!client) {
      error.statusCode = 401;
      error.description =
        'Could not find valid credentials for the Natural Language Understanding service.';
      error.title = 'Invalid credentials';
    }
    next(error);
  }
});

// error-handler settings for all other routes
require('./config/error-handler')(app);

module.exports = app;
