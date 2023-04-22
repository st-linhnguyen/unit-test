import { AuthStorageService } from '../../core/services/authStorage.service';

describe('AuthStorageService', () => {
  let authStorageService: AuthStorageService;
  let localStorageMock;

  beforeEach(() => {
    localStorageMock = (function () {
      let store = {};

      return {
        getItem(key: string) {
          return store[key];
        },

        setItem(key: string, value: string) {
          store[key] = value;
        },

        clear() {
          store = {};
        },

        removeItem(key: string) {
          delete store[key];
        },

        getAll() {
          return store;
        },
      };
    })();
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    authStorageService = new AuthStorageService();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should set ACCESS_TOKEN in local storage', () => {
    const mockAccessToken = 'mock_access_token';
    jest.spyOn(localStorage, 'setItem');

    authStorageService.setToken(JSON.stringify(mockAccessToken));

    expect(localStorage.setItem).toHaveBeenCalledWith('token', JSON.stringify(mockAccessToken));
  });

  it('should get ACCESS_TOKEN from local storage', () => {
    const mockAccessToken = 'mock_access_token';
    jest.spyOn(localStorage, 'getItem').mockReturnValueOnce(JSON.stringify(mockAccessToken));

    const accessToken = authStorageService.getToken();

    expect(localStorage.getItem).toHaveBeenCalledWith('token');
    expect(accessToken).toEqual(JSON.stringify(mockAccessToken));
  });

  it('should remove ACCESS_TOKEN from local storage', () => {
    jest.spyOn(localStorage, 'removeItem');

    authStorageService.removeToken();

    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
  });
});
