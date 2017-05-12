const express = require('express');
const app = express();

app.use('/', express.static('.'));

app.listen(3000, function () {
  console.log('Test server listening on port 3000...')
});
