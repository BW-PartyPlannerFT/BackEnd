const request = require('supertest');
const server = require('../api/server');

describe('server is working properly', () => {
    it ('returns the proper http status code on get', async () => {
        const code = 200;
        const res = await request(server).get('/');
        expect(res.status).toBe(code);
    })

    it('returns proper data type', async () => {
        const d = "application/json"
        const res = await request(server).get('/');
        expect(res.type).toBe(d)
    })
})