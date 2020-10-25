const express = require('express');
require('dotenv').config()

const app = express();

app.use(express.json())
app.use('/auth', require('./routes/auth'));

app.listen(process.env.PORT ?? 5000, () => console.log(process.env.PORT || 5000));


