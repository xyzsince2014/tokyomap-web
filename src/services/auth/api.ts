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

interface AuthenticateResult {
  isAuthenticated: boolean;
  userId: string;
}

export const getAuthFactory = (optionalConfig?: ApiConfig) => {
  const instance = createAxiosInstance();

  const authenticate = async (): Promise<AuthenticateResult> => {
    try {
      const response = await instance.get('/auth/authenticate', {
        validateStatus: status => status < 500,
        withCredentials: true,
      });

      if (response.status !== 200) {
        return {
          isAuthenticated: false,
          userId: '',
        };
      }

      return {
        isAuthenticated: response.data.isAuthenticated ? response.data.isAuthenticated : false,
        userId: response.data.user.userId ? response.data.user.userId : '0',
      };
    } catch (err) {
      return {
        isAuthenticated: false,
        userId: '',
      };
    }
  };

  return authenticate;
};
