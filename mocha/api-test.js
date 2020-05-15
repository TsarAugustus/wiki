const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

//Test /api endpoint

it('/Api Endpoint', function(done) {
   chai.request('http://localhost:3000/api')
      .get('/')
      .then(function (res) {
        expect(res.status).to.equal(200)
      })
      .catch(function (err) {
        throw err;
      });
      done();
});
