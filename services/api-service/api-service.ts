// import queryString from 'query-string';

import FetchProvider from './fetch-provider';

class ApiService extends FetchProvider {
  fetchPageContent = ({ pageID }: { pageID: string }) => {
    return this.get(`/${pageID}`);
  };

  // just for example
  fetchMe = (id: string) => {
    return this.post('/getuser', { userID: id });
  };
  editMe = (id: string) => {
    return this.post('/changeuser', { userID: id });
  };
  login = ({ login, password }: { login: string; password: string }) => {
    return this.post('/login', { login: login, password: password });
  };
  signup = ({ login, password, email }: { login: string; password: string; email: string }) => {
    return this.post('/signup', { login: login, password: password, email: email });
  };
}

export default new ApiService();
