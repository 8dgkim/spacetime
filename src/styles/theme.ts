// src/styles/theme.ts

const theme = {
  dark: {
    backgroundColor: 'black',
    textColor: 'white',
  },
  light: {
    backgroundColor: 'white',
    textColor: 'black',
  },
};

export const getTheme = (colorScheme: 'light' | 'dark') => {
  return colorScheme === 'dark' ? theme.dark : theme.light;
};
