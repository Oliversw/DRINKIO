/* eslint-disable-no-console */
const request = require("supertest");
const app = require("./app");

test("server files should pass integration test", done => {
  request(app)
    .get("/")
    .expect(200)
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
