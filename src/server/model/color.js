'use strict';

const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
  colorFamily: { type: String, required: true },
  hexCode: { type: String, required: true },
  colorName: { type: String, unique: true },
});

module.exports = mongoose.model('Color', colorSchema);