import { AuthStorageService, AuthStorage } from '../../core/services/authStorage.service';

describe('AuthStorageService', () => {
  let authStorageService: AuthStorageService;
  let storageMock: jest.Mocked<AuthStorage>;
  let localStorageMock;

  beforeEach(() => {
    localStorageMock = (function () {
      let store = {};

      return {
        getItem(key) {
          return store[key];
        },

        setItem(key, value) {
          store[key] = value;
        },

        clear() {
          store = {};
        },

        removeItem(key) {
          delete store[key];
        },

        getAll() {
          return store;
        },
      };
    })();
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });

    storageMock = {
      setToken: jest.fn(),
      getToken: jest.fn(),
      removeToken: jest.fn(),
    };
    authStorageService = new AuthStorageService();
  });

  describe('setToken', () => {
    it('should set token in storage', () => {
      authStorageService.setToken('test-token');
      expect(storageMock.setToken).toHaveBeenCalledWith('test-token');
    });

    it('should not set token in storage if it is undefined', () => {
      authStorageService.setToken(undefined);
      expect(storageMock.setToken).not.toHaveBeenCalled();
    });
  });

  describe('getToken', () => {
    it('should get token from storage', () => {
      storageMock.getToken.mockReturnValueOnce();
      const result = authStorageService.getToken();
      expect(result).toEqual('test-token');
    });
  });

  describe('removeToken', () => {
    it('should remove token from storage', () => {
      authStorageService.removeToken();
      expect(storageMock.removeToken).toHaveBeenCalled();
    });
  });
});
