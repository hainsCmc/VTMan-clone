import {createSlice} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {ThemeEnum} from '~/models/common';
import {fonts as Fonts} from '~/themes';

/* ------------- Initial State ------------- */
const initialState = {
  language: 'vi',
  theme: ThemeEnum.light,
  font: Object.keys(Fonts)[1],
};

const reducers = {
  changeLanguageAction(state, {payload}) {
    state.language = payload;
  },
  changeThemeAction(state, {payload}) {
    state.theme = payload;
  },
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers,
});

export const {changeLanguageAction, changeThemeAction} = sessionSlice.actions;

export const useSession = () => {
  const dispatch = useDispatch();
  const changeLanguage = (data: string) => {
    dispatch(changeLanguageAction(data));
  };
  const changeTheme = (data: string) => {
    dispatch(changeThemeAction(data));
  };

  return {
    changeLanguage,
    changeTheme,
  };
};

export default {
  reducer: sessionSlice.reducer,
  initialState,
};
