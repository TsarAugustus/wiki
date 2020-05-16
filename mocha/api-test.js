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
  it('GET /api', function(done) {
     chai.request('http://localhost:3000/api')
      .get('/')
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

  it('PUT /api', function(done) {
     chai.request('http://localhost:3000/api')
      .put('/')
      .then(function (res) {
        console.log('4');
        expect(res.status).to.equal(200)
      })
      .catch(function (err) {
        throw err;
      });
    done();
  })

  it('DELETE /API', function(done) {
     chai.request('http://localhost:3000/api')
      .delete('/')
      .then(function (res) {
        console.log('5');
        expect(res.status).to.equal(202)
      })
      .catch(function (err) {
        throw err;
      });
    done();
  });
});
