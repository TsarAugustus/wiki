const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

let totResult = '';

function randomString(length, chars) {
  let result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  totResult = result;
  return result;
}

//Test /api endpoint

describe('API Test', function() {
  it('GET page from /api/wiki', function(done) {
     chai.request('http://localhost:3000/api/wiki')
      .get('/Duplicate')
      .then(function (res) {
        console.log('1');
        expect(res.status).to.equal(200)
      })
      .catch(function (err) {
        throw err;
      });
    done();
  });



  it('POST /api/wiki', function(done) {
     chai.request('http://localhost:3000/api')
      .post('/wiki')
      .send({"title": randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')})
      .then(function (res) {
        console.log('2');
        expect(res.status).to.equal(201)
      })
      .catch(function (err) {
        throw err;
      });
    done();
  });

  it('PUT /api/wiki', function(done) {
     chai.request('http://localhost:3000/api/wiki')
      .put('/Duplicate')
      .send({"description": randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')})
      .then(function (res) {
        console.log('4');
        expect(res.status).to.equal(204)
      })
      .catch(function (err) {
        throw err;
      });
    done();
  });
});
