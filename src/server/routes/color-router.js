'use strict';

const Router = require('express').Router();
const Color = require('../model/color');

Router.get('/api/colors', (req, res) => {
  Color.find({})
    .then(colors => {
      // console.log(colors)
      // console.log(colors.length)
      res.send({colors})
    })

  // let skip = req.query.skip || 0;
  // let limit = req.query.limit || 10;

  // skip = parseInt(skip);
  // limit = parseInt(limit);

  // Color.find({})
  //   .skip(skip)
  //   .limit(limit)
  //   .then(movies => {
  //     Color.count()
  //       .then(total => {
  //         res.send({
  //           movies: movies,
  //           total: total,
  //         });
  //       });
  //   });
});

module.exports = Router;