// src/styles/fonts.ts

import {Platform} from 'react-native';

const fontStyles = {
  default: {
    fontFamily: Platform.OS === 'android' ? 'Times New Roman' : 'serif',
  },
  hangul: {
    fontFamily: 'NanumMyeongjo',
  },
};

export const getDefaultFontStyle = () => fontStyles.default;
export const getHangulFontStyle = () => fontStyles.hangul;
