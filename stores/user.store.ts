import { observable, action, makeObservable, runInAction } from 'mobx';

import { ApiService } from '@services/api-service/';

import { ErrorWithStatus } from '@interfaces/error';

// const TOKEN_KEY = !!window ? window.location.hostname + '_AUTH_TOKEN' : '';

export class UserStore {
  me: { isempty?: boolean; email?: string } = { isempty: true };
  // authToken: string | null = localStorage.getItem(TOKEN_KEY) || null;
  authToken = '';
  meLoading = false;
  meError: ErrorWithStatus | null = null;

  /* eslint-disable */
  // @ts-ignore
  setAuthToken = (token: string): void => {
    // this.authToken = token;
    // localStorage.setItem(TOKEN_KEY, token);
  };

  deleteAuthToken = (): void => {
    // this.authToken = null;
    // localStorage.removeItem(TOKEN_KEY);
  };

  signup = async (payload: { login: string; password: string; email: string }): Promise<void> => {
    const result = await ApiService.signup({ ...payload });
    this.setAuthToken(result.token);
  };

  login = async (payload: { login: string; password: string }): Promise<void> => {
    const { token } = await ApiService.login({ ...payload });

    this.setAuthToken(token);
  };

  logout = (): void => {
    this.me = { isempty: true };
    this.deleteAuthToken();
  };

  fetchMe = async (userid: string): Promise<void> => {
    runInAction(() => {
      this.meLoading = true;
      this.meError = null;
    });

    try {
      const data = await ApiService.fetchMe(userid);

      runInAction(() => {
        this.me = data;
        this.meLoading = false;
      });
    } catch (error) {
      if ((error as ErrorWithStatus).status === 401) {
        this.logout();
      }

      runInAction(() => {
        this.meError = error as ErrorWithStatus;
        this.meLoading = false;
      });

      throw error;
    }
  };

  editMe = async (meid: string): Promise<void> => {
    runInAction(() => {
      this.meLoading = true;
      this.meError = null;
    });

    try {
      const data = await ApiService.editMe(meid);

      runInAction(() => {
        this.meLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.meError = error as ErrorWithStatus;
      });
    } finally {
      runInAction(() => {
        this.meLoading = false;
      });
    }
  };
}

export default makeObservable(new UserStore(), {
  me: observable,
  authToken: observable,
  meLoading: observable,
  meError: observable,

  deleteAuthToken: action,
  editMe: action,
  login: action,
  logout: action,
  fetchMe: action,
  setAuthToken: action,
  signup: action,
});
