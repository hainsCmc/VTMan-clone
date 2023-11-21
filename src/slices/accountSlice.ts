import {createSlice} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

/* ------------- Initial State ------------- */
const initialState = {
  userData: null,
  selectWareHouse: null,
  token: '',
  refreshToken: '',
  enableQuantity: false,
};

const reducers = {
  setUserDataAction(state, {payload}) {
    state.userData = payload;
  },
  setSelectWareHouseAction(state, {payload}) {
    state.selectWareHouse = payload;
  },
  setTokenAction(state, {payload}) {
    state.token = payload?.accessToken;
    state.refreshToken = payload?.refreshToken;
  },
  setEnableQuantityAction(state, {payload}) {
    state.enableQuantity = payload;
  },
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers,
});

export const {
  setUserDataAction,
  setSelectWareHouseAction,
  setTokenAction,
  setEnableQuantityAction,
} = accountSlice.actions;

export const useAccount = () => {
  const dispatch = useDispatch();
  const setUserData = data => {
    dispatch(setUserDataAction(data));
  };
  const setSelectWareHouse = data => {
    dispatch(setSelectWareHouseAction(data));
  };
  const setToken = data => {
    dispatch(setTokenAction(data));
  };
  const setEnableQuantity = data => {
    dispatch(setEnableQuantityAction(data));
  };

  return {
    setUserData,
    setSelectWareHouse,
    setToken,
    setEnableQuantity,
  };
};

export default {
  reducer: accountSlice.reducer,
  initialState,
};
