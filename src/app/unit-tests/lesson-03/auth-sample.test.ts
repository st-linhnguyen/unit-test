import { describe, test } from '@jest/globals';
import { AuthStorageService } from '../../core/services/authStorage.service';
import AuthSample from './auth.sample';

jest.mock('../../core/services/authStorage.service', () => ({
  AuthStorageService: jest.fn().mockImplementation(() => ({
    ACCESS_TOKEN: 'token',
    setToken: jest.fn(),
    getToken: jest.fn(),
    removeToken: jest.fn()
  }))
}));

describe('AuthSample', () => {
  let authStorageService: AuthStorageService;
  let authSample: AuthSample;

  beforeEach(() => {
    authSample = new AuthSample();
    authStorageService = new AuthStorageService();
  });

  test('getAuthHeader', () => {
    authSample.getAuthHeader();
    expect(authStorageService.getToken).toBeCalled();
  });
});
