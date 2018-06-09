'use strict';

const Router = require('express').Router();
const Color = require('../model/color');

// GET ALL COLORS
Router.get('/api/colors', (req, res) => {
  let page = parseInt(req.query.page - 1) || 0;

  Color.find({})
    .skip(parseInt(page) * 12)
    .limit(12)
    .then(colors => {
      Color.count({})
      .then(total => {
        return res.send({ colors, total })
      })
    })
});

// GET SINGLE COLOR
Router.get(`/api/color/:hexCode`, (req, res) => {
  Color.findOne({ hexCode: req.params.hexCode })
    .then(color => {
      res.send({ color })
    })
})

// GET COLORS WITHIN 1 FAMILY
Router.get('/api/colors/:family', (req, res) => {
  let page = parseInt(req.query.page - 1) || 0;

  return Color.find({ colorFamily: req.params.family })
    .skip(parseInt(page) * 12)
    .limit(12)
    .then(colors => {
      Color.count({ colorFamily: req.params.family })
      .then(total => {
        return res.send({ colors, total })
      })
    })
});

// GET RANDOM COLOR
Router.get('/api/random', (req, res) => {
  Color.count().exec()
    .then(count => {
      return Math.floor(Math.random() * count)
    })
    .then(random => {
      return Color.findOne().skip(random)
    })
    .then(color => {
      res.send({ color })
    })
});

module.exports = Router;