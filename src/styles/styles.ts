// styles.ts

import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    // color: 'white',
  },
});

export const darkTheme = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontFamily: 'Times New Roman',
  },
});
