'use strict';

const Router = require('express').Router();
const Color = require('../model/color');

Router.get('/api/colors', (req, res) => {
  Color.find({})
    .then(colors => {
      res.send({colors})
    })
});

module.exports = Router;