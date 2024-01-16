
const express = require('express');
const app = express();
import { renderToString } from 'react-dom/server';
//
import {Csr} from './pages/App';
const routes = require('./routes/index');
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// route
app.use('/', routes);
/*
app.get('/api/test', (req: any, res: any) => {
  try {
    res.send({ name: "ok, /api/test" });
  } catch (error) {
    res.sendStatus(500);
  }
});
app.get('/test', (req: any, res: any) => {
  try {
    res.send({ name: "welcome" });
  } catch (error) {
    res.sendStatus(500);
  }
});
*/
//
app.get('/*', (req: any, res: any) => {
  try {
    res.send(renderToString(Csr()));
  } catch (error) {
    res.sendStatus(500);
  }
});


//start
const PORT = 4000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
console.log('start');

export default app;