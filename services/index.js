const express = require('express');
const app = express();
const port = 3001;

const contentService = require('./content/ContentService');
app.use('/content', contentService);

const userService = require('./user/UserService');
app.use('/user', userService);

app.listen(port, () => console.log(`Mock services listening on port ${port}!`));