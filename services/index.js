const express = require('express');

const port = 3001;
const app = express();

app.use('/user', require('./user/UserService'));
app.use('/content', require('./content/ContentService'));
app.use('/orders', require('./order/OrderService'));
app.use('/medications', require('./medication/MedicationService'));
app.use('/root', require('./root/RootService'));

// Run the Express Application
app.listen(port, () => console.log(`Mock services listening on port ${port}!`));
