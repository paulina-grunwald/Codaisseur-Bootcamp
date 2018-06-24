// 1. Install dependencies: yarn add mocha chai chai-http
// 2. Copy scripts below to tester.js
// 3. Run script: ./node_modules/.bin/mocha tester.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

const host = 'http://localhost:4001';

describe('Real estate REST API', () => {
  it('GET /houses/1 returns 200 OK', done => {
    chai
      .request(host)
      .get('/houses/1')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('GET /houses/1 returns proper house object', done => {
    chai
      .request(host)
      .get('/houses/1')
      .end(function(err, res) {
        const body = res.body;
        expect(body).to.deep.equal({
          id: 1,
          title: 'Villa with view on the canal',
          address: 'Keizersgracht 586',
          size: 155,
          price: 5500000
        });
        done();
      });
  });

  it('GET /houses returns 200 OK', done => {
    chai
      .request(host)
      .get('/houses')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('GET /houses returns an envelope', done => {
    chai
      .request(host)
      .get('/houses')
      .end(function(err, res) {
        const body = res.body;
        expect(body).to.have.property('houses');
        done();
      });
  });

  it('GET /houses returns an envelope with 4 houses', done => {
    chai
      .request(host)
      .get('/houses')
      .end(function(err, res) {
        const body = res.body;
        expect(body)
          .to.have.property('houses')
          .to.have.lengthOf(4);
        done();
      });
  });

  it('return 404 for /houses/2', done => {
    chai
      .request(host)
      .get('/houses/2')
      .end(function(err, res) {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('return 404 for /users', done => {
    chai
      .request(host)
      .get('/users')
      .end(function(err, res) {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('return 404 for /users/1', done => {
    chai
      .request(host)
      .get('/users/1')
      .end(function(err, res) {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('return 404 for /randomurl + random number', done => {
    chai
      .request(host)
      .get('/randomurl' + Math.random())
      .end(function(err, res) {
        expect(res).to.have.status(404);
        done();
      });
  });
});
