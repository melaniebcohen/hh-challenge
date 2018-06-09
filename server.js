'use strict';

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();
const favicon = require('serve-favicon');

const Color = require('./model/color.js');
const colors = require('./data/colorData.js');
const colorRouter = require('./routes/color-router.js');

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    Color.collection.drop();
  })
  .then(() => {
    colors.forEach(color => {
      let colorObj = new Color(color);
      colorObj.save();
    });
  })
  .catch(err => console.log(err));

app.use(cors());
app.use(colorRouter);
app.use(favicon(`${__dirname}/favicon.ico`));
app.use(express.static(path.join(__dirname, 'dist')));

const server = module.exports = app.listen(PORT, () => {
  console.log(`server up: ${PORT}`);
});

server.isRunning = true;