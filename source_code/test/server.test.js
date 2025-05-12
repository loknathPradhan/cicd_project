const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return index.html with 200 status', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Welcome to'); // Update this to match your actual HTML
  });
});
