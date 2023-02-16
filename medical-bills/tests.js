const script = require('../script');
const request = require('supertest');


describe('GET /items', () => {
  it('should return a list of medical bills', async () => {
    const response = await request(script).get('/items');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });
});

describe('POST /items', () => {
  it('should create a new medical bill', async () => {
    const newBill = {
      patientName: 'John Doe',
      patientAddress: '123 Main St.',
      hospitalName: 'St. Mary\'s Hospital',
      dateOfService: '2022-02-14',
      billAmount: 1000.00
    };
    const response = await request(script)
      .post('/items')
      .send(newBill);
    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject(newBill);
  });
});