const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

//should return 400, as there is already a post with that title
describe('Duplicate tests', function() {
  this.timeout(1000);
  it('Duplicate POST /api/wiki', function(done) {
    console.log('DUPLICATE')
    chai.request('http://localhost:3000/api/wiki')
      .post('/Duplicate')
      .send({"title": "Duplicate"})
      .then(function(res) {
        console.log('3');
        expect(res.status).to.equal(400);
      })
      .catch(function(err) {
        throw err
      });
    done();
  });
});
