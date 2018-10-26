'use strict';

import express from 'express';
import path from 'path';
import routes from './lib/routes';
import bodyParser from 'body-parser';

const app = express();
app.use(express.static(path.join(__dirname, 'public/build/')));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

// Routes defined
routes(app);

export default app;
