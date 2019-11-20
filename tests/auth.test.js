const request = require('supertest');
const router = require('../api/server');

describe('auth route is working properly', () => {
    describe('auth route works well', () => {
        it ('returns proper HTTP status code', async () => {
            const code = 404;
            const res = await request(router).post('/api/auth');
            expect(res.status).toBe(code);
        })

        it ('returns proper data type', async () => {
            const d = "text/html"
            const res = await request(router).get('/api/auth');
            expect(res.type).toBe(d)
        })
    })
})