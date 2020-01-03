const express = require('express');
const next = require('next');

// Read from local environment file.
require('dotenv').config({ silent: true });

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');

const serviceClient = require('./lib/natural-language-understanding');

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.post('/api/analyze', async (req, res) => {
    try {
      const results = await serviceClient.analyze(req.body);
      return res.status(200).json(results);
    } catch (error) {
      return res.status(error.statusCode).json({ error });
    }
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
