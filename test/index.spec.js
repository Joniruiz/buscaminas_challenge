const app = require('../app');
const request = require('supertest');

describe('GET /games', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/games');
        expect(response.statusCode).toBe(200);
    });
    test('sould respond with a json', async () => {
        const response = await request(app).get('/games').send()
        expect(response.type).toBe('application/json');
     });
});
describe('GET /games/:id',() => {
    test('should respond with a 200 status code', async () => {
       const response = await request(app).get('/games/3').send()
       expect(response.statusCode).toBe(200);
    });
    test('sould respond with a json', async () => {
        const response = await request(app).get('/games/3').send()
        expect(response.type).toBe('application/json');
     });
    
});
describe('POST /games',() => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).post('/games').send()
        expect(response.statusCode).toBe(200);
        });
    test('sould respond with a json', async () => {
            const response = await request(app).post('/games').send()
            expect(response.type).toBe('application/json');
        });    
});

