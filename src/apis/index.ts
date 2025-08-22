/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import _ from 'lodash';

const ApiClient = axios.create({
  baseURL: 'http://10.239.207.17:3500', // TODO: Replace with env.API_URL later
  // baseURL: 'https://brodsalt-portal-production.up.railway.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

ApiClient.interceptors.request.use(async config => {
  // === Token logic disabled for now ===
  // const accessToken = await getStorageItem(STORAGE_KEY.ACCESS_TOKEN);

  // if (accessToken) {
  //   (config.headers || {}).Authorization = `Bearer ${accessToken}`;
  // }

  // === FormData Handling (Keep active if needed) ===
  if (config.data instanceof FormData) {
    if (!config.headers) {
      config.headers = new axios.AxiosHeaders();
    }
    config.headers['Content-Type'] = 'multipart/form-data';
  }

  console.log('API Request:', JSON.stringify(config, null, 2));

  return config;
});

ApiClient.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    console.log('API Error:', JSON.stringify(error, null, 2));

    if (error.response?.status === 401 || error.response?.status === 400) {
      // Token expired or invalid, optional logic:
      // deleteStorageItem(STORAGE_KEY.ACCESS_TOKEN);
      // deleteStorageItem(STORAGE_KEY.FCM_TOKEN);
      // Optionally navigate to login screen
    }

    let errorTitle = '';
    if ('message' in error.response?.data) {
      errorTitle = _.get(error, 'response.data.message', '');
    } else if ('title' in error.response?.data) {
      errorTitle = _.get(error, 'response.data.title', '');
    } else {
      errorTitle = 'Something went wrong...';
    }

    // if (!_.isEmpty(errorTitle)) {
    //   Alert.alert('Error', errorTitle);
    // }

    return Promise.reject(_.get(error, 'response', {}));
  },
);

export default ApiClient;
