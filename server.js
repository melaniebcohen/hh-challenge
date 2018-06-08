'use strict';

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();

const Color = require('./src/model/color.js');
const colors = require('./src/data/colorData.js');
const colorRouter = require('./src/routes/color-router.js');

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
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => {
  console.log(`server up at ${PORT}`);
});