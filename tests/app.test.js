'use strict';

const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('responds with a welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Welcome to Sirvato.io!' });
  });
});

describe('GET /greet/:name', () => {
  it('returns a greeting for a valid name', async () => {
    const res = await request(app).get('/greet/Alice');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ greeting: 'Hello, Alice! Welcome to Sirvato.io.' });
  });

  it('returns 400 for an invalid name (empty string via encoded spaces)', async () => {
    const res = await request(app).get('/greet/%20%20%20');
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});
