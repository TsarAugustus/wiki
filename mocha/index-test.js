const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

//Test / endpoint

describe('/ Index', () => {
  it('/Endpoint', function(done) {
     chai.request('http://localhost:3000')
        .get('/')
        .then(function (res) {
          expect(res.status).to.equal(200)
        })
        .catch(function (err) {
          throw err;
        });
        done();
  });
});
