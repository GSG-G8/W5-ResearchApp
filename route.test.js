const request = require('supertest');
const app = require('./src/App');

test('GET /' , done => {
    request(app)
    .get('/')
    .expect('Content-Type' , /json/)
    .expect(200)
    .end((err , res) => {
        if(err) return done(err);
        done();
    });
});

test('POST /search' , done => {
        request(app)
          .post('/search')
          .send({name: 'john'})
          .set('Accept' , 'application/json')
          .expect('Content-Type' , /json/)
          .expect(200)
          .end((err , res) => {
              if(err) return done(err);
              done();
          });

    });
