'use strict';

const Router = require('express').Router();
const Color = require('../model/color');

// GET ALL COLORS - will have pagination
Router.get('/api/colors', (req, res) => {
  Color.find({})
    .then(colors => {
      res.send({ colors })
    })
});

// GET COLORS WITHIN 1 FAMILY

// GET RANDOM COLOR
Router.get('/api/random', (req, res) => {
  Color.count().exec()
    .then(count => {
      return Math.floor(Math.random() * count + 1)
    })
    .then(random => {
      return Color.findOne().skip(random)
    })
    .then(color => {
      res.send({ color })
    })
});

module.exports = Router;