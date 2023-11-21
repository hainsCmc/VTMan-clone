import {createSlice} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

/* ------------- Initial State ------------- */
const initialState = {
  isLoading: false,
};

const reducers = {
  setLoadingAction(state, {payload}) {
    state.isLoading = payload;
  },
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers,
});

export const {setLoadingAction} = loadingSlice.actions;

export const useLoading = () => {
  const dispatch = useDispatch();
  const setLoading = data => {
    dispatch(setLoadingAction(data));
  };

  return {
    setLoading,
  };
};

export default {
  reducer: loadingSlice.reducer,
  initialState,
};
