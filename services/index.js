const express = require('express');

const port = 3001;
const app = express();

const contentService = require('./content/ContentService');
app.use('/content', contentService);

const userService = require('./user/UserService');
app.use('/user', userService);

// Run the Express Application
app.listen(port, () => console.log(`Mock services listening on port ${port}!`));
