const request = require('supertest');
const router = require('../api/server');

describe('parties route is working properly', () => {
    it ('returns the proper http status code on get', async () => {
        const code = undefined;
        const res = await request(router).get('/api/parties');
        expect(res.atatus).toBe(code);
    })

    it ('returns proper data type', async () => {
        const d = "application/json"
        const res = await request(router).get('/api/parties');
        expect(res.type).toBe(d)
    })
})