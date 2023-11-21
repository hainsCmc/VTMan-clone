import axios from 'axios';
import {BASE_URL} from '~/configs/BaseUrl';
import {LOGIN, REFRESH_TOKEN} from '~/constants/ApiName';
import {setTokenAction} from '~/slices/accountSlice';
import {store} from '~/stores';
import i18n from '~/translations';
import Translation from '~/translations/locales/vi.json';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const requestHandler = async config => {
  const token = store.getState()?.account?.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const refreshAccessToken = async () => {
  const token = store.getState()?.account?.token;
  const refreshToken = store.getState()?.account?.refreshToken;
  const body = {
    accessToken: token,
    refreshToken: refreshToken,
  };

  try {
    const response = await api({
      method: 'post',
      url: REFRESH_TOKEN,
      data: body,
    });

    return response?.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const getError = error => {
  if (!!error?.response) {
    if (typeof error?.response?.data?.detail === 'object') {
      return JSON.parse(error?.response?.data?.detail);
    }
    if (!!error?.response?.data) {
      return error?.response?.data;
    }
    return undefined;
  } else if (!!error?.request) {
    return undefined;
  } else {
    return undefined;
  }
};

// const getErrorCode = error => {
//   if (!!error?.response) {
//     if (
//       !!error?.response?.data?.detail &&
//       typeof error?.response?.data?.detail === 'object'
//     ) {
//       return JSON.parse(error?.response?.data?.detail)?.errorCode;
//     }
//     if (!!error?.response?.data?.errorCode) {
//       return error?.response?.data?.errorCode;
//     }
//     return undefined;
//   } else if (!!error?.request) {
//     console.log('request', error?.request);
//     return undefined;
//   } else {
//     console.log('error', error);
//     return undefined;
//   }
// };

// const getDetailError = error => {
//   if (error?.response) {
//     if (
//       !!error?.response?.data?.detail &&
//       typeof error?.response?.data?.detail === 'object'
//     ) {
//       return undefined;
//     }
//     if (!!error?.response?.data?.wmsErrorCode) {
//       return error?.response?.data?.detail;
//     }
//     return undefined;
//   } else if (error?.request) {
//     console.log('request', error?.request);
//     return undefined;
//   } else {
//     console.log('error', error);
//     return undefined;
//   }
// };

export const errorHandler = async error => {
  const config = error?.config;
  switch (error?.response?.status) {
    case 401:
      if (!config._retry) {
        try {
          const {accessToken, refreshToken} = await refreshAccessToken();
          store.dispatch(
            setTokenAction({
              accessToken,
              refreshToken,
            }),
          );
          config._retry = true;
          config.headers.Authorization = `Bearer ${accessToken}`;
          return api(config);
        } catch (err) {
          store.dispatch({
            type: 'CLEAR_DATA',
          });
          return Promise.reject({
            code: getError(error)?.errorCode || 'OTHER_ERROR',
            status: error?.response?.status,
            data: getError(error)?.data,
            detail: getError(error)?.detail || 'Hết phiên đăng nhập.',
            message: Object.keys(Translation.errors)?.includes(
              getError(error)?.errorCode,
            )
              ? i18n.t(getError(error)?.errorCode)
              : i18n.t('errors.OTHER_ERROR'),
          });
        }
      }
      return Promise.reject({
        code: 'OTHER_ERROR',
        status: error?.response?.status,
        data: getError(error)?.data,
        detail: getError(error)?.detail || 'Có lỗi xảy ra. Vui lòng thử lại.',
        message: Object.keys(Translation.errors)?.includes(
          getError(error)?.errorCode,
        )
          ? i18n.t(getError(error)?.errorCode)
          : i18n.t('errors.OTHER_ERROR'),
      });
    case 400:
      return Promise.reject({
        code: getError(error)?.errorCode || 'OTHER_ERROR',
        status: error?.response?.status,
        data: getError(error)?.data,
        detail: getError(error)?.detail || 'Có lỗi xảy ra. Vui lòng thử lại.',
        message: Object.keys(Translation.errors)?.includes(
          getError(error)?.errorCode,
        )
          ? i18n.t(getError(error)?.errorCode)
          : i18n.t('errors.OTHER_ERROR'),
      });
    default:
      return Promise.reject({
        code: getError(error)?.errorCode || 'OTHER_ERROR',
        status: error?.response?.status,
        data: getError(error)?.data,
        detail: getError(error)?.detail || 'Có lỗi xảy ra. Vui lòng thử lại.',
        message: Object.keys(Translation.errors)?.includes(
          getError(error)?.errorCode,
        )
          ? i18n.t(getError(error)?.errorCode)
          : i18n.t('errors.OTHER_ERROR'),
      });
  }
};

api.interceptors.request.use(requestHandler, error => Promise.reject(error));

api.interceptors.response.use(response => response, errorHandler);

export default api;
