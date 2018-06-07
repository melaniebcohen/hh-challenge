'use strict';

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Color = require('./model/color.js');
const colors = require('./data/colorData.js');

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

// const colorRouter = require('./routes/color-router.js');
// app.use(colorRouter);

app.listen(PORT, () => {
  console.log(`server up: ${PORT}`);
});