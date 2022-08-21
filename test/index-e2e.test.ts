import request from 'supertest';
import app from '../src/app';

describe('Base route test', () => {
  let response: request.Response;

  test('/ping GET', async () => {
    response = await request(app).get('/ping');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Pong');
  });

  test('Not found route', async () => {
    response = await request(app).get('/asd');
    expect(response.status).toEqual(404);
  });
});
