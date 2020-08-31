import axios from 'axios';
// import {Hoge} from './models';

interface ApiConfig {
  baseURL?: string;
  timeout?: number;
}

// const DOMAIN_API_AUTH = 'http://localhost:4000';

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: process.env.DOMAIN_API_AUTH,
  timeout: 1000 * 10,
};

const createAxiosInstance = (optionalConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionalConfig,
  };

  const instance = axios.create(config);

  // interceptors
  // instance.interceptors.request.use(() => {});
  // instance.interceptors.response.use(() => {});

  return instance;
};

/* ******************************************************
 * api handlers
 ****************************************************** */
export const getAuthFactory = (optionalConfig?: ApiConfig) => {
  const instance = createAxiosInstance();

  /**
   * call :4000/auth/verify
   * isAuthorised in the store is made true if the endpoint returns true
   */
  const getAuth = async () => {
    try {
      const response = await instance.get('/auth/verify', {
        // validateStatus: status => status < 500,
      });

      // if (response.status !== 200 || response.data.status !== 200) {
      //   return {isAuthorised: false};
      // }

      return {isAuthorised: response.data.success};
      // return {isAuthorised: response.data};
    } catch (err) {
      return {isAuthorised: false};
    }
  };

  return getAuth;
};
