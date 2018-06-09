'use strict';

const server = require('../server.js');
const serverToggle = require('../lib/server-toggle.js'); 
const request = require('superagent');
const PORT = process.env.PORT || 3000;

const Color = require('../model/color.js');

const url = `https://hh-challenge.herokuapp.com`;
require('jest');

describe('Color Router', function() {
  beforeAll( done => serverToggle.serverOn(server, done));
  afterAll( done => serverToggle.serverOff(server, done));

  describe('GET: /api/colors', function() {
    it('should return a total of all colors', done => {
      return request.get(`${url}/api/colors?page=1`)
        .then((res) => {
          expect(res.status).toEqual(200);
          expect(res.body.total).toEqual(101);
          expect(res.body.colors.length).toEqual(12);
          expect(typeof res.body.colors).toEqual('object');
          done();
        });
    });
  });
  describe('GET: /api/color/:hexCode', function() {
    it('should return a single color', done => {
      return request.get(`${url}/api/color/32CD32`)
        .then((res) => {
          expect(res.body.color.colorFamily).toEqual('Green');
          expect(res.body.color.colorName).toEqual('Lime Green');
          expect(res.body.color.hexCode).toEqual('32CD32');
          expect(typeof res.body.color).toEqual('object');
          done();
        });
    });
  });
  describe('GET: /api/colors/:family', function() {
    it('should return a color family', done => {
      return request.get(`${url}/api/colors/Green?page=1`)
        .then((res) => {
          expect(res.body.total).toEqual(20);
          expect(res.body).toHaveProperty('total');
          expect(res.body.colors.length).toEqual(12);
          expect(res.body.colors[0].colorFamily).toEqual('Green');
          done();
        });
    });
  });
  describe('GET: /api/random', function() {
    it('should return a random color', done => {
      return request.get(`${url}/api/random`)
        .then((res) => {
          expect(typeof res.body).toEqual('object');
          expect(res.body.color.hexCode.length).toEqual(6);
          done();
        // })
        });
    });
  });
});