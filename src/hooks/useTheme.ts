import {useAppSelector} from './useAppSelector';
import {colors, fonts} from '~/themes';

export const useTheme = () => {
  const {theme, font} = useAppSelector(state => state.session);

  return {colors: colors[theme], fonts: fonts[font] as typeof fonts.roboto};
};
