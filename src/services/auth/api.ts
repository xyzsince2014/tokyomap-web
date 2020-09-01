import axios from 'axios';

interface ApiConfig {
  baseURL?: string;
  timeout?: number;
}

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

  const getIsAuthorised = async () => {
    try {
      const response = await instance.get('/auth/verify', {
        validateStatus: status => status < 500,
        withCredentials: true,
      });

      if (response.status !== 200) {
        return false;
      }

      return response.data.authenticated;
    } catch (err) {
      return false;
    }
  };

  return getIsAuthorised;
};
