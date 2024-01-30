const express = require('express');
const router = express.Router();
//import LibTodo from '../lib/LibTodo';

/*****************************
todos -index
******************************/
router.post('/test', async function(req: any, res: any) {
  try {
//    const items = await LibTodo.getItems(req);
console.log(req.body);
    res.json([]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});


export default router;
