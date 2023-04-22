import { AuthStorageService } from '../../core/services/authStorage.service';

export default class AuthSample {
  authStorage: AuthStorageService;

  constructor() {
    this.authStorage = new AuthStorageService();
  }

  getAuthHeader() {
    return this.authStorage.getToken();
  }
}
