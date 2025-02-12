const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const { expect } = chai;

chai.use(chaiHttp);

describe('API Tests', () => {
  describe('GET /api/words', () => {
    it('should return words with a length of 5', (done) => {
      chai.request(server)
        .get('/api/words?length=5')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.words).to.be.an('array').that.includes('apple', 'grape', 'peach');
          done();
        });
    });

    it('should return words starting with the letter b', (done) => {
      chai.request(server)
        .get('/api/words?startsWith=b')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.words).to.be.an('array').that.includes('banana', 'berry', 'blueberry');
          done();
        });
    });

    it('should return words with a length of 4 and starting with the letter c', (done) => {
      chai.request(server)
        .get('/api/words?length=4&startsWith=c')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.words).to.be.an('array').that.includes('cake', 'corn');
          done();
        });
    });

    it('should return an empty array if no words match the criteria', (done) => {
      chai.request(server)
        .get('/api/words?length=10&startsWith=z')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.words).to.be.an('array').that.is.empty;
          done();
        });
    });

    it('should handle invalid query parameters gracefully', (done) => {
      chai.request(server)
        .get('/api/words?length=invalid')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.words).to.be.an('array');
          done();
        });
    });
  });
});
