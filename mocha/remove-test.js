const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('DELETE PAGE', function() {
  this.timeout(5000);
  it('DELETE /API', function(done) {
    this.timeout(2000);
    console.log('DELETE')
     chai.request('http://localhost:3000/api/wiki')
      .delete('/Duplicate')
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
