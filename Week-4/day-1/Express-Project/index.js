const express = require('express');
const app = express();
app.listen(4001, () => console.log('Express API listening on port 4001'));
app.get('/do-something', (request, response) => {
  console.log(`I'll do something, I promise!`);
  response.end();
});
