import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {getAuthFactory} from '../../../services/auth/api';

describe('getAuthFactory', () => {
  const mock = new MockAdapter(axios);

  // reset `mock` after each test
  afterEach(() => {
    mock.reset();
  });

  describe('authenticate', () => {
    test('should rejected', async () => {
      // return `authData` with status_code=200 on request to the API
      mock
        .onGet(`${process.env.DOMAIN_API_AUTH}/auth/authenticate`)
        .reply(403, {isAuthenticated: false});

      try {
        const authenticate = getAuthFactory();
        await authenticate();
      } catch (err) {
        expect(err.response.status).toBe(404);
      }
    });
  });
});
