import { describe, test, jest } from '@jest/globals';
import { AuthStorageService } from '../../core/services/authStorage.service';
import AuthSample from './auth.sample';

describe('AuthSample', () => {
  let authSample: AuthSample;

  beforeEach(() => {
    authSample = new AuthSample();
  });

  test('getAuthHeader', () => {
    const spyGetToken = jest.spyOn(AuthStorageService.prototype, 'getToken');
    const token = authSample.getAuthHeader();
    expect(spyGetToken).toBeCalled();
    expect(token).toBe(null);
  });
});
